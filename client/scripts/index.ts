import * as skillScripts from "./skills";
import * as navigationScripts from "./navigation";

Object.keys(skillScripts).forEach(script => skillScripts[script]());
Object.keys(navigationScripts).forEach(script => navigationScripts[script]());
