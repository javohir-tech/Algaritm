"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CanLog(Base) {
    return class extends Base {
        log(message) {
            console.log(`[LOG] : ${message}`);
        }
    };
}
function CanAccess(Base) {
    return class extends Base {
        setRole(role) {
            this.role = role;
        }
        canAccess(userRole) {
            return this.role === userRole;
        }
    };
}
function CanValidate(Base) {
    return class extends Base {
        isValidEmail(email) {
            return email.includes("@");
        }
        isNotEmpty(value) {
            return value.trim().length > 0;
        }
    };
}
class User {
    role;
    constructor(role) {
        this.role = role;
    }
}
const UserMixin = CanLog(CanAccess(CanValidate(User)));
class UserServices extends UserMixin {
    createUser(email, name) {
        if (!this.isValidEmail(email)) {
            this.log("email is Invalid");
            return;
        }
        if (!this.isNotEmpty(email)) {
            this.log("Email  is  empty");
            return;
        }
        if (!this.isNotEmpty(name)) {
            this.log("Name  is empty");
            return;
        }
        if (!this.canAccess("admin")) {
            this.log("Sizga bu amaliyotni bajarish taqiqlangan");
            return;
        }
        this.log(`User is created : ${name} ${email}`);
    }
}
const userService = new UserServices("user");
const userService1 = new UserServices("admin");
const c = UserServices;
const user = new c("admin");
console.log(user.role);
user.setRole("admin");
user.createUser("suvonov@gmail.com", "john");
// userService.log("salom");
// userService.setRole("user");
// userService.createUser("user@gmail.com", "josh");
// userService1.setRole("admin");
// userService1.createUser("user@gmail.com", "doe");
//# sourceMappingURL=index.js.map