function chechAdult(age: number): boolean {
  if (age >= 18) {
    return true;
  }

  return false;
}

console.log(chechAdult(22));

const person = {
  firstName: "Javohir",
  lastName: "Suvonov",
  age: 22,
  skills: {
    languages: "javascript",
  },
};

const getName = (data: { firstName: string; lastName: string }): string => {
  return `${data.firstName}  ${data.lastName}`;
};

const person1 = getName(person);
console.log(person1)