
import {exec} from "child_process";
import {promisify} from "util";

const execAsync = promisify(exec);
export async function generateModule(fileName: string) {
    const lastIndex = fileName.lastIndexOf("/");
    const target = fileName.substring(0, lastIndex)
    return  execAsync(`nx generate module ${target}`)
}