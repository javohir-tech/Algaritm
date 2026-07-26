// let id :  number | string

// id = 12
// id = "wewww11"
// console.log(id)

// TYPE NAROWING

// function getVal(value : string | number) : string | number{
//     if(typeof value === 'string'){
//         return value.toLowerCase()
//     }else if(typeof value === 'number'){
//         return value.toFixed(2)
//     }

//     return `Unknown type ${value}`
// }

// console.log(getVal("javohir"))
// console.log(getVal(2.345))
// console.log(getVal(true))

// function handleError(error: { message: string } | { error: string }) {
//     if("message" in error){
//         console.log(error.message.toLowerCase())
//     }else if("error" in error){
//         console.log(error.error.toUpperCase())
//     }
// }

// handleError({message : "bu errorda kelgan message"})
// handleError({error : "bu errorda kelgan error"})

const data: (string | number)[] = ["salom", 1, "dunyo", 2];
