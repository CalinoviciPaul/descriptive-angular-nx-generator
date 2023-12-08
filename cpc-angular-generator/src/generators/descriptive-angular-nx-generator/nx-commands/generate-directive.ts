
import {promisify} from "util";
import {exec} from "child_process";

const execAsync = promisify(exec);
export async function generateDirective(fileName: string) {
    return  execAsync(`nx generate @nx/angular:directive ${fileName} --nameAndDirectoryFormat=as-provided --no-interactive`)
}
