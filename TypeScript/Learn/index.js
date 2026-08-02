"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formValidation(data) {
    const errors = {};
    if (!data.email) {
        errors.email = "Emalnni kiritish shart";
    }
    else if (!data.email.includes("@")) {
        errors.email = "Email is  Invalid";
    }
    if (!data.name) {
        errors.name = "Ism kiritilmagan";
    }
    else if (data.name.length < 3) {
        errors.name = "Ism kamida 3ta belgidan iborat bo'lishi kerak";
    }
    if (!data.password) {
        errors.password = "Password kiritilmagan";
    }
    else if (data.password.length < 6) {
        errors.password = "Password kamida 6 ta belgidan ibboraat bo'lishi kerak";
    }
    return errors;
}
// test
const user1 = {
    name: "Javohir",
    email: "suvonovjavohir625@gmail.com",
    password: "1234556",
};
console.log(formValidation(user1));
//# sourceMappingURL=index.js.map