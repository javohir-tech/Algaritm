////////////////// literal types ////////////////////
let status: "success" | "error" | "loading";

status = "success";

console.log(status);

let code: 200 | 201 | 204 | 404 | 500 = 200;

code = 404;

console.log(code);

// enum Status {
//   Success,
//   Error,
// }

type Status = "success" | "error";

function myFunction(status: Status): Status {
  if (status === "success") {
    return "success";
  }

  return "error";
}

console.log(myFunction("success"));
console.log(myFunction("error"));
