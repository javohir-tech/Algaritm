type GetPropType<T  , K extends keyof T> = T[K]

type User = {
    name :  string ;
    age : number
}

type UserType = GetPropType<User , "name"> // string
