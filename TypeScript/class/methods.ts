enum Status {
  Pending,
  Resolved,
  Rejected,
}

enum Provider {
  Uzum,
  Payme,
  Click,
}

class Payment {
  id: Provider;
  status: Status;
  created_time: Date;
  updated_time: Date;

  constructor(id: Provider) {
    this.id = id;
    this.status = Status.Pending;
    this.created_time = new Date();
    this.updated_time = new Date();
  }

  show_life_time() {
    return new Date().getTime() - this.updated_time.getTime();
  }

  handle_reject() {
    if (this.status === Status.Resolved) {
      throw new Error("bu payment allaqachon bajarilip bo'linngan");
    }

    this.status = Status.Rejected;
    this.updated_time = new Date();
  }
}

const payme = new Payment(Provider.Payme);

console.log(payme);
payme.status = Status.Resolved
setTimeout(() => {
    payme.handle_reject()
    const duration = payme.show_life_time()
    console.log(duration)
    console.log(payme)
} , 1000);
