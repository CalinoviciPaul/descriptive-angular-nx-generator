
import {exec} from "child_process";
import {promisify} from "util";
import {logger} from "@nx/devkit";

const execAsync = promisify(exec);
export async function generateGuard(fileName: string) {
    logger.error(`Guard filePath: ${fileName}`)
    return  execAsync(`nx generate guard ${fileName}`)
}