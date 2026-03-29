////////// VOID ///////////////////

// function myFunction (text : string){
//   console.log(text)
// }

// myFunction("hello")

function greet(text : string , callback : (message : string) => void){
  console.log(text)
  callback(`logget : ${text}`)
}

greet("hello" , (message) =>{
  return message
})