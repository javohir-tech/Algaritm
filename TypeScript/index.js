"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IsAdmin(user) {
    return user.role === "admin";
}
function greet(user) {
    if (IsAdmin(user)) {
        console.log(user.adminSecretCode.toUpperCase());
    }
}
greet({ name: "javohir", role: "admin", adminSecretCode: "23www" });
//# sourceMappingURL=index.js.map