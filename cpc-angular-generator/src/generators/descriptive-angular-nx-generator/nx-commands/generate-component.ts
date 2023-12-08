// --nameAndDirectoryFormat=as-provided

import {promisify} from "util";
import {exec} from "child_process";

const execAsync = promisify(exec);
export async function generateComponent(fileName: string) {
    return  execAsync(`nx generate @nx/angular:component ${fileName} --nameAndDirectoryFormat=as-provided`)
}
