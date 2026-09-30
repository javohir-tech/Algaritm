interface IUser {
    id : string
    name: string;
    password: string;
    age: number;
    isMerried: boolean;
}

type userkeys = Exclude<keyof IUser , "id">

let  key : userkeys = "name"
