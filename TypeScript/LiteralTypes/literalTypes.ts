// let statusMassage: "success" | "loading" | "error";

// statusMassage = "success";
// statusMassage = "loading";
// statusMassage = "error";
// // statusMassage = 'errorr'

// enum Status {
//   Success,
//   Loading,
//   Error,
// }

type Status = "success" | "error";

function getStatus(status: Status): "success" | "error" {
  if (status === "success") {
    return "success";
  } else if (status === "error") {
    return "error";
  }

  return "error";
}

console.log(getStatus("success"));
console.log(getStatus("error"));
