const person = {
  first_name: "Javohir",
  last_name: "Suvonov",
  age: 21,
  address: {
    country: "Uzbekistan",
  },
};

const getFullName = (data: { first_name: string; last_name: string ; age : number }) => {
  return `${data.first_name} ${data.last_name} ${data.age}`;
};

const fullName = getFullName(person)
console.log(fullName)
