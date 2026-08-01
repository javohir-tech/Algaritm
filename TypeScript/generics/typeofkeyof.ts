interface IUser {
  name: string;
  age: string;
  isMerried: boolean;
}

type KeysUser = keyof IUser;

function getProporty(key : KeysUser) {
    console.log(key)
}

getProporty("name")