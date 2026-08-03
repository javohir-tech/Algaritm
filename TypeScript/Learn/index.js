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
        role = "guest";
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
const userService = new UserServices();
const userService1 = new UserServices();
userService.setRole("user");
userService.createUser("user@gmail.com", "josh");
userService1.setRole("admin");
userService1.createUser("usergmail.com", "doe");
//# sourceMappingURL=index.js.map