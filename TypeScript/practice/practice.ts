enum Role {
  ADMIN,
  STUDENT,
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  role: Role;
}

interface ICource {
  id: number;
  title: string;
  description: string;
  students: IUser[];
}

const cources: ICource[] = [];

function IsAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
  return user.role === Role.ADMIN;
}

function AddCource(user: IUser, cource: ICource) {
  if (!IsAdmin(user)) {
    console.log("faqat adminlargina kurs qo'sha oladi");
    return;
  } else {
    cources.push(cource);
    console.log(`kusr qoshildi ${cource.title}`);
  }
}

function addStudent(user: IUser, courceId: number) {
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

function showCources(user: IUser, courceId: number) {
  if (!IsAdmin(user)) {
    console.log("kurs  haqidagi malumotlarni faqat adminlar kora oladi");
    return
  }

  const course = cources.find((c) => c.id === courceId);
  if (course) {
    console.log(course);
  }
}

const user1: IUser = {
  id: 1,
  firstName: "Javohir",
  lastName: "Suvonov",
  age: 22,
  role: Role.STUDENT,
};

const user2: IUser = {
  id: 2,
  firstName: "John",
  lastName: "Doe",
  age: 28,
  role: Role.ADMIN,
};

const courese1: ICource = {
  id: 1,
  title: "Math",
  description: "yaxshi kurs",
  students: [],
};

// call functions
AddCource(user2, courese1);
addStudent(user1, courese1.id);
showCources(user1, courese1.id);
