//  ====================== TUPLE =======================

const data : [string , number] = ['suvonov' , 22]
// error  Type 'string' is not assignable to type 'number'.
// const data : [string , number] = [22 , "suvonov"]
console.log(data[0])
console.log(data[1])
// Tuple type '[string, number]' of length '2' has no element at index '2'.
// console.log(data[2])

// data.push("javohir")
// Tuple type '[string, number]' of length '2' has no element at index '2'.
// console.log(data[2])

console.log(data);

// string | number union type (string | boolean | number va hk)
let cordinates : [number , string | number] = [98 , 23]

cordinates = [22 , 'east']

// Type 'string' is not assignable to type 'number'.
// cordinates = ['west' , 'east']

console.log(cordinates)


// tuple for  functions 
const myFunction = () : [string , number | string | boolean] =>{
    return ["javohir" , 22]
}

const res = myFunction()
console.log(res)

// console.log(res[0])
// console.log(res[1])

// Tuple type '[string, string | number | boolean]' of length '2' has no element at index '2'.
// console.log(res[2])

const [firstName , age ] = myFunction()
// Tuple type '[string, string | number | boolean]' of length '2' has no element at index '2'.
// const [firstName , age , isMerried] = myFunction()
console.log(firstName , age)

//  tuple qiymatlarini orgartirsa boladi faqat array uzunligini va har bitta indexdagi ozgaruvchinni  type i qattiy belgilanadi 
const person : [string , number] = ['doe' , 22]

person[0]= 'john'
person[1] = 23

console.log(person)


