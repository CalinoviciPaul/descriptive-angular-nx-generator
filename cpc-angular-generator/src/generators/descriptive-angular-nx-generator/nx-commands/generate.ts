import {generateClass} from "./generate-class";
import {generateComponent} from "./generate-component";
import {generateDirective} from "./generate-directive";
import {generateEnum} from "./generate-enum";
import {generateGuard} from "./generate-guard";
import {generateInterface} from "./generate-interface";
import {generateModule} from "./generate-module";
import {generatePipe} from "./generate-pipe";
import {generateService} from "./generate-service";
import {logger, Tree} from "@nx/devkit";
import {generateRoutes} from "./generate-routes";

export async function generate(type: string, fileName: string, tree: Tree) {
    if(type==="class"){
        return generateClass(fileName);
    }  if(type==="component"){
        return generateComponent(fileName);
    }  if(type==="directive"){
        return generateDirective(fileName);
    }  if(type==="enum"){
        return generateEnum(fileName);
    }  if(type==="guard"){
        return generateGuard(fileName);
    }  if(type==="interface" || type===""){
        return generateInterface(fileName);
    }  if(type==="module"){
        return generateModule(fileName);
    }  if(type==="pipe"){
        return generatePipe(fileName);
    } if(type==="service"){
        return generateService(fileName);
    }if(type==="routes"){
        return generateRoutes(fileName, tree);
    }

}