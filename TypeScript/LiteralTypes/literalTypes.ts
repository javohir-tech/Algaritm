// let statusMassage: "success" | "loading" | "error";

// statusMassage = "success";
// statusMassage = "loading";
// statusMassage = "error";
// // statusMassage = 'errorr'

enum Status {
  Success,
  Loading,
  Error,
}

function getStatus(status: Status): "success" | "error" {
  if (status === Status.Success) {
    return "success"
  }else if(status === Status.Error){
    return "error"
  }

  return "error"
}

console.log(getStatus(Status.Error))
console.log(getStatus(Status.Success))
