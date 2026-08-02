interface IAnimal {
  name: string;
  age: number;
  sex : string ;
  high : number
}

interface IPlan {
  name: string;
  age : number;
  color: string;
}

type CommonProporties = Extract<keyof IAnimal, keyof IPlan>;

type UnCommonProporties  = Exclude<keyof IAnimal , keyof IPlan>