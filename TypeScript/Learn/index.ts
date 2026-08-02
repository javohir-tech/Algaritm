interface IUser {
  name: string;
  age: number;
  isMerried: boolean;
}

// indexed access
type UserName = IUser["name"];

// conversations

type A<T> = T extends boolean ? "yes" | "ha" : "no" | "yoq";

type BooleanType = A<boolean>; // "yes" | "ha"
type StringType = A<string>; // "no" | "yoq"

function getProporty<T , K extends keyof T>(obj : T , key :K):T[K]{
    return obj[key]
}


interface  IAdmin {
    role : "admin" ;
    access : true
}

interface IGuest {
    role : "guest" ;
    access : "false"
}

type RoleAccess<T> = T extends {role : "admin"} ? true : false

type AdminType = RoleAccess<IAdmin> // true
type GuestType = RoleAccess<IGuest> // false