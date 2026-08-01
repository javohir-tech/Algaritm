function getProporty<T, K extends keyof T>(obj:T , key : K):T[K]{
    return obj[key]
}

interface IUser {
    id : number ,  
    name : string  , 
    email : string
}

type userKeys = keyof IUser

const user : IUser = {
    id : 23 , 
    name : "Javohir" , 
    email : "suvonovjavohir625@gmail.com"
}

console.log(getProporty<IUser , userKeys>(user , "name"))