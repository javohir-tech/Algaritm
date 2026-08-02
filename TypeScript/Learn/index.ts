interface FormDataType {
  name: string;
  email: string;
  password: string;
}

interface FormErrorType {
  name?: string;
  email?: string;
  password?: string;
}

function formValidation<T extends FormDataType>(data: T): FormErrorType {
  const errors: FormErrorType = {};

  if (!data.email) {
    errors.email = "Emalnni kiritish shart";
  } else if (!data.email.includes("@")) {
    errors.email = "Email is  Invalid";
  }

  if (!data.name) {
    errors.name = "Ism kiritilmagan";
  } else if (data.name.length < 3) {
    errors.name = "Ism kamida 3ta belgidan iborat bo'lishi kerak";
  }

  if (!data.password) {
    errors.password = "Password kiritilmagan";
  } else if (data.password.length < 6) {
    errors.password = "Password kamida 6 ta belgidan ibboraat bo'lishi kerak";
  }

  return errors;
}

// test
const user1: FormDataType = {
  name: "Javohir",
  email: "suvonovjavohir625@gmail.com",
  password: "1234556",
};


console.log(formValidation<FormDataType>(user1))

