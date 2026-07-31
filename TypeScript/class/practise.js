"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["STUDENT"] = "student";
})(Role || (Role = {}));
class User {
    id;
    name;
    role;
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
class Course {
    students = [];
    id;
    title;
    description;
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    showStuents() {
        return this.students.map((student) => student.name).join(", ");
    }
    addStudent(user) {
        this.students.push(user);
        console.log(`${user.name} ${this.title} kursiga qo'shildi`);
    }
}
class Admin extends User {
    addCourse(course, courses) {
        courses.push(course);
        console.log(`${course.title} qo'shildi`);
    }
    addStudent(student, course) {
        course.addStudent(student);
    }
    showStudents(course) {
        console.log(course.showStuents());
    }
}
function isAdmin(user) {
    return user instanceof Admin;
}
const user1 = new User(101, "Javohir", Role.STUDENT);
const user2 = new User(102, "Shuhrat", Role.STUDENT);
const user3 = new User(103, "Bek", Role.STUDENT);
const course = new Course(202, "Math", "Matematikega ihtisoslashgan");
const admin1 = new Admin(303, "Asad", Role.ADMIN);
console.log(admin1);
admin1.showStudents(course);
admin1.addStudent(user2, course);
admin1.addStudent(user3, course);
course.addStudent(user1);
console.log(course.showStuents());
console.log(course);
//# sourceMappingURL=practise.js.map