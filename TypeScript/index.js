"use strict";
////////// VOID ///////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// function myFunction (text : string){
//   console.log(text)
// }
// myFunction("hello")
function greet(text, callback) {
    console.log(text);
    let res = callback(`logget : ${text}`);
    const qiziq = res.toUpperCase();
    console.log(qiziq, "natija");
}
greet("hello", (message) => {
    return message;
});
//# sourceMappingURL=index.js.map