
import {promisify} from "util";
import {exec} from "child_process";

const execAsync = promisify(exec);
export async function generateService(fileName: string) {
    return  execAsync(`nx generate service ${fileName}`)
}
