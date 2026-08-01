const user = {
  name: "Javohir",
  age: 22,
};

type TypeUser = typeof user

function getUserName(obj : TypeUser): string {
    return obj.name
}

console.log(getUserName(user))


