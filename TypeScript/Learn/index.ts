type Constructor<T = {}> = new (...args: any[]) => T;

function CanLog<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    log(message: string) {
      console.log(`[LOG] : ${message}`);
    }
  };
}

interface IHasRole {
  role : string
}

function CanAccess<TBase extends Constructor<IHasRole>>(Base: TBase) {
  return class extends Base {
    role: string = "guest";

    setRole(role: string) {
      this.role = role;
    }

    canAccess(userRole: string): boolean {
      return this.role === userRole;
    }
  };
}

function CanValidate<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isValidEmail(email: string): boolean {
      return email.includes("@");
    }

    isNotEmpty(value: string): boolean {
      return value.trim().length > 0;
    }
  };
}

class User {
  role : string ;

  constructor(role : string) {
    this.role = role
  }
}

const UserMixin = CanLog(User);

class UserServices extends UserMixin {
  // createUser(email: string, name: string) {
  //   if (!this.isValidEmail(email)) {
  //     this.log("email is Invalid");
  //     return;
  //   }

  //   if (!this.isNotEmpty(email)) {
  //     this.log("Email  is  empty");
  //     return
  //   }

  //   if(!this.isNotEmpty(name)){
  //     this.log("Name  is empty")
  //     return
  //   }

  //   if(!this.canAccess("admin")){
  //     this.log("Sizga bu amaliyotni bajarish taqiqlangan")
  //     return
  //   }

  //   this.log(`User is created : ${name} ${email}`)
  // }
}

const userService =  new UserServices("user")
const userService1 =  new UserServices("admin")
userService.log("salom")

// userService.setRole("user")
// userService.createUser("user@gmail.com" ,  "josh")

// userService1.setRole("admin")
// userService1.createUser("user@gmail.com" , "doe")


