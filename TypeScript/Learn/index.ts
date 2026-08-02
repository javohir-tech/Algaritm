// ContructorParams - class laarni constructor funksiyalariga berilgan parametrlarni tipini olish uchun ishlatiladi

class User {
  constructor(name : string , age : number){

  }
}

type UserClassParams = ConstructorParameters<typeof  User>

const params : UserClassParams = ["javohir" , 22]
const user = new User(...params)