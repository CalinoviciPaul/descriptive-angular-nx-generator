
import {promisify} from "util";
import {exec} from "child_process";
import {logger} from "@nx/devkit";

const execAsync = promisify(exec);
export async function generatePipe(fileName: string) {
    logger.error(`Pipe filePath: ${fileName}`)
    return  execAsync(`nx generate @nx/angular:pipe ${fileName} --nameAndDirectoryFormat=as-provided --no-interactive`)
}
