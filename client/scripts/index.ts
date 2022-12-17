import * as listeners from "./listeners";

Object.keys(listeners).forEach(listener => listeners[listener]());
