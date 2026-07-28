interface IUser {
  name: string;
  role: "admin" | "student";
  adminSecretCode?: string;
}

interface IAdmin {
  name : string , 
  role : "admin" , 
  adminSecretCode?: string;
}

function IsAdmin(
  user: IUser,
): user is IUser & {role : "admin" , adminSecretCode : string} {
  return user.role === "admin";
}

function greet(user: IUser) {
  if (IsAdmin(user)) {
    console.log(user.adminSecretCode.toUpperCase());
  }
}

greet({name :"javohir" , role : "admin" , adminSecretCode : "23www"})
