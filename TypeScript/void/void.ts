// function logger(message: string): void {
//     console.log(message)
// }

// logger("salom")

// let unuseble : void
// unuseble = undefined
// console.log(unuseble)

function logger(message: string, callback: (name: string) => void) {
  callback("salom");
  console.log("Logger : " + message);
}

logger("salom" , (name)=>{
    console.log(name)
})