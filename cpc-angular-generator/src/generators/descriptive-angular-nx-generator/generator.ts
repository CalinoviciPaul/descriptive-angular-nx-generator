import {logger, Tree} from '@nx/devkit';
import {join} from 'path';
import {readFile} from "fs/promises";
import {emptyDirSync} from "fs-extra";
import {generate} from "./nx-commands/generate";

interface Schema {
    filePath: string;
}


function extractType(filePath: string): string {
    const parts = filePath.split('.');
    if (parts.length === 3) {
        const extractedString = parts[1];
        return extractedString;
    }
    if (parts.length === 2 && parts[1]==="ts") {
        return "";
    } else {
        logger.error("Could not generate file ${filePath}, please check configuration!");
        throw new Error("Could not generate file ${filePath}, please check configuration!");
    }
}

async function createFile(tree: Tree, currentPath: string, trimmedLine: string) {
    const filePath = join(currentPath, trimmedLine)
    if (tree.exists(filePath)) {
        logger.info(`${filePath} exists`);
        return (tree: Tree) => tree;
    } else {
        logger.info(`${filePath} creating`);
        try {
            const type = extractType(filePath);
            const firstDotIndex = filePath.indexOf('.');
            let extractedString;
            if (firstDotIndex !== -1) {
                extractedString = filePath.substring(0, firstDotIndex);
            } else {
                console.log("No '.' found in the input string.");
            }
            await generate(type, extractedString, tree);
        } catch (error) {
            logger.error(`Error executing nx generate command: ${error}`);
            throw  error;
        }
    }
}


export async function cpcAngularGenerator(tree: Tree, options: Schema) {
    let content: string;
    try {
        content = await readFile(options.filePath, 'utf-8');
    } catch (error) {
        logger.error('Error reading file: ' + error.message);
        return;
    }
    const lines = content.split('\n');
    let pathStack: string[] = [];

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine) {
            const depth = line.indexOf(trimmedLine) / 2;
            const isFile = trimmedLine.includes('.ts');
            while (pathStack.length > depth) {
                pathStack.pop();
            }
            const currentPath = pathStack.join('/');
            if (isFile) {
                await createFile(tree, currentPath, trimmedLine);
            } else {
                pathStack.push(trimmedLine);
                const folderPath = pathStack.join('');
                emptyDirSync(folderPath.substring(1));

            }
        }
    }

}

export default cpcAngularGenerator;
