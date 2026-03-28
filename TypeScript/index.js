"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////////////////// literal types ////////////////////
let status;
status = "success";
console.log(status);
let code = 200;
code = 404;
console.log(code);
function myFunction(status) {
    if (status === "success") {
        return "success";
    }
    return "error";
}
console.log(myFunction("success"));
console.log(myFunction("error"));
//# sourceMappingURL=index.js.map