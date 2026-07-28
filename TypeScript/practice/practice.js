"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["STUDENT"] = 1] = "STUDENT";
})(Role || (Role = {}));
const cources = [];
function IsAdmin(user) {
    return user.role === Role.ADMIN;
}
function AddCource(user, cource) {
    if (!IsAdmin(user)) {
        console.log("faqat adminlargina kurs qo'sha oladi");
        return;
    }
    else {
        cources.push(cource);
        console.log(`kusr qoshildi ${cource.title}`);
    }
}
function addStudent(user, courceId) {
    if (IsAdmin(user)) {
        console.log("Adminlar kursga qo'shila olmaydi");
        return;
    }
    const course = cources.find((c) => (c.id = courceId));
    if (course) {
        course.students.push(user);
        console.log(`${user.firstName} ${course?.title} kursiga yozildi`);
    }
}
function showCources(user, courceId) {
    if (!IsAdmin(user)) {
        console.log("kurs  haqidagi malumotlarni faqat adminlar kora oladi");
        return;
    }
    const course = cources.find((c) => c.id === courceId);
    if (course) {
        console.log(course);
    }
}
const user1 = {
    id: 1,
    firstName: "Javohir",
    lastName: "Suvonov",
    age: 22,
    role: Role.STUDENT,
};
const user2 = {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    role: Role.ADMIN,
};
const courese1 = {
    id: 1,
    title: "Math",
    description: "yaxshi kurs",
    students: [],
};
// call functions
AddCource(user2, courese1);
addStudent(user1, courese1.id);
showCources(user1, courese1.id);
//# sourceMappingURL=practice.js.map