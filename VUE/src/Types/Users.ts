export interface IUser {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
  company: {
    bs: string;
    catchPhrase: string;
    name : string;
  };
  address:{
    city : string ; 
    street : string;
    suite : string;
    zipcode : string;
    geo : {
        lat : string;
        lng : string;
    }
  }
}
