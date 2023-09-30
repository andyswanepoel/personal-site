import * as timelineScripts from "./timeline";
import * as navigationScripts from "./navigation";

Object.keys(navigationScripts).forEach(script => navigationScripts[script]());
Object.keys(timelineScripts).forEach(script => timelineScripts[script]());
