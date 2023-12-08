import {generateFiles, joinPathFragments, logger, ProjectConfiguration, Tree} from "@nx/devkit";
import {getRelativeCwd} from "@nx/devkit/src/generators/artifact-name-and-directory-utils";

import {join, normalize} from 'path';

export async function generateRoutes(filePath: string, tree: Tree) {
    const lastSlashIndex = filePath.lastIndexOf("\\");
    const targetFolder = filePath.substring(0, lastSlashIndex);
    const fileName = filePath.substring(lastSlashIndex + 1);

    const relPath = normalize(getRelativeCwd());
    const targetPath = normalize(targetFolder);
    const fullPath = join(relPath, targetPath);

    logger.error(`Full filePath: ${fullPath}`)
    generateFiles(
        tree, // the virtual file system
        joinPathFragments(__dirname, '../files/src'), // path to the file templates
        fullPath, // destination path of the files
        {
            name: fileName
        } // config object to replace variable in file templates
    );

}
