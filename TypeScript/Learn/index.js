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
    role;
    constructor(role) {
        this.role = role;
    }
}
const UserMixin = CanLog(User);
class UserServices extends UserMixin {
}
const userService = new UserServices("user");
const userService1 = new UserServices("admin");
userService.log("salom");
// userService.setRole("user")
// userService.createUser("user@gmail.com" ,  "josh")
// userService1.setRole("admin")
// userService1.createUser("user@gmail.com" , "doe")
//# sourceMappingURL=index.js.map