interface IUser {
  name: string;
  age: string;
  isMerried: boolean;
}

type KeysUser = keyof IUser;

const user = {
    name : "Javohir" , 
    age: 22, 
    email : "suvonovjavohir625@gmail.com"
}

type keys = keyof typeof user

function getKeys(keys : keys){
    console.log(keys)
}

getKeys("age")

