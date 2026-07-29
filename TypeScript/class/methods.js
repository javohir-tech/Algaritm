"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Resolved"] = 1] = "Resolved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
var Provider;
(function (Provider) {
    Provider[Provider["Uzum"] = 0] = "Uzum";
    Provider[Provider["Payme"] = 1] = "Payme";
    Provider[Provider["Click"] = 2] = "Click";
})(Provider || (Provider = {}));
class Payment {
    id;
    status;
    created_time;
    updated_time;
    constructor(id) {
        this.id = id;
        this.status = Status.Pending;
        this.created_time = new Date();
        this.updated_time = new Date();
    }
    show_life_time() {
        return new Date().getTime() - this.updated_time.getTime();
    }
    handle_reject() {
        if (this.status === Status.Resolved) {
            throw new Error("bu payment allaqachon bajarilip bo'linngan");
        }
        this.status = Status.Rejected;
        this.updated_time = new Date();
    }
}
const payme = new Payment(Provider.Payme);
console.log(payme);
payme.status = Status.Resolved;
setTimeout(() => {
    payme.handle_reject();
    const duration = payme.show_life_time();
    console.log(duration);
    console.log(payme);
}, 1000);
//# sourceMappingURL=methods.js.map