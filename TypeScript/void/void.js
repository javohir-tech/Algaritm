"use strict";
// function logger(message: string): void {
//     console.log(message)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// logger("salom")
// let unuseble : void
// unuseble = undefined
// console.log(unuseble)
function logger(message, callback) {
    callback("salom");
    console.log("Logger : " + message);
}
logger("salom", (name) => {
    console.log(name);
});
//# sourceMappingURL=void.js.map