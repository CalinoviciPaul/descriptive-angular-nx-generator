
import {exec} from "child_process";
import {promisify} from "util";

const execAsync = promisify(exec);
export async function generateClass(fileName: string) {
    return  execAsync(`nx generate class ${fileName}`)
}