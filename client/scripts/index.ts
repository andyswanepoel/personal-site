import * as timelineScripts from "./timeline";
import * as navigationScripts from "./navigation";
import * as deferStyles from "./deferStyles";

Object.keys(navigationScripts).forEach(script => navigationScripts[script]());
Object.keys(timelineScripts).forEach(script => timelineScripts[script]());
Object.keys(deferStyles).forEach(script => deferStyles[script]());
