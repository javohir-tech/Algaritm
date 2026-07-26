"use strict";
// let statusMassage: "success" | "loading" | "error";
Object.defineProperty(exports, "__esModule", { value: true });
function getStatus(status) {
    if (status === "success") {
        return "success";
    }
    else if (status === "error") {
        return "error";
    }
    return "error";
}
console.log(getStatus("success"));
console.log(getStatus("error"));
//# sourceMappingURL=literalTypes.js.map