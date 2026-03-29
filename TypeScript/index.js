"use strict";
////////// VOID ///////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// function myFunction (text : string){
//   console.log(text)
// }
// myFunction("hello")
function greet(text, callback) {
    console.log(text);
    callback(`logget : ${text}`);
}
greet("hello", (message) => {
    console.log(message);
});
//# sourceMappingURL=index.js.map