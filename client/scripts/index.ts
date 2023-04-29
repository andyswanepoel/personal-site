import * as timelineScripts from "./timeline";
import * as skillScripts from "./skills";
import * as navigationScripts from "./navigation";

Object.keys(navigationScripts).forEach(script => navigationScripts[script]());
Object.keys(skillScripts).forEach(script => skillScripts[script]());
Object.keys(timelineScripts).forEach(script => timelineScripts[script]());
