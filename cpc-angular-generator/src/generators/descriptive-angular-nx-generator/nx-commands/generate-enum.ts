
import {exec} from "child_process";
import {promisify} from "util";

const execAsync = promisify(exec);
export async function generateEnum(fileName: string) {
    return  execAsync(`nx generate enum ${fileName}`)
}