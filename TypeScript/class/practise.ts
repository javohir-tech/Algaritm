enum Role {
  ADMIN = "admin",
  STUDENT = "student",
}

interface IUser {
  id: number;
  name: string;
  role: Role;
}

class User implements IUser {
  id: number;
  name: string;
  role: Role;

  constructor(id: number, name: string, role: Role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

class Course {
  private students: User[] = [];

  id: number;
  title: string;
  description: string;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  showStuents(): string {
    return this.students.map((student) => student.name).join(", ");
  }

  addStudent(user: User) {
    this.students.push(user);
    console.log(`${user.name} ${this.title} kursiga qo'shildi`);
  }
}

class Admin extends User {
  addCourse(course: Course, courses: Course[]) {
    courses.push(course);
    console.log(`${course.title} qo'shildi`);
  }

  addStudent(student: User, course: Course) {
    course.addStudent(student);
  }

  showStudents(course: Course) {
    console.log(course.showStuents());
  }
}

function isAdmin(user: User): user is Admin {
  return user instanceof Admin;
}

const user1 = new User(101, "Javohir", Role.STUDENT);
const user2 = new User(102, "Shuhrat", Role.STUDENT);
const user3 = new User(103, "Bek", Role.STUDENT);

const course = new Course(202, "Math", "Matematikega ihtisoslashgan");

const admin1 = new Admin(303 , "Asad" , Role.ADMIN)

console.log(admin1)
admin1.showStudents(course)
admin1.addStudent(user2 , course)
admin1.addStudent(user3 , course)


course.addStudent(user1)

console.log(course.showStuents())
console.log(course)
