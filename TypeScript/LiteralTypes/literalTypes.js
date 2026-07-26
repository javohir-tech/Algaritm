"use strict";
// let statusMassage: "success" | "loading" | "error";
Object.defineProperty(exports, "__esModule", { value: true });
// statusMassage = "success";
// statusMassage = "loading";
// statusMassage = "error";
// // statusMassage = 'errorr'
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Loading"] = 1] = "Loading";
    Status[Status["Error"] = 2] = "Error";
})(Status || (Status = {}));
function getStatus(status) {
    if (status === Status.Success) {
        return "success";
    }
    else if (status === Status.Error) {
        return "error";
    }
    return "error";
}
console.log(getStatus(Status.Error));
console.log(getStatus(Status.Success));
//# sourceMappingURL=literalTypes.js.map