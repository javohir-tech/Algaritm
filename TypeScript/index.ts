////////// VOID ///////////////////

// function myFunction (text : string){
//   console.log(text)
// }

// myFunction("hello")

function greet(text : string , callback : (message : string) => void){
  console.log(text)
  let res = callback(`logget : ${text}`)
  // const qiziq = res.toUpperCase()
  console.log(res , "natija")
}

greet("hello" , (message) =>{
  return message
})