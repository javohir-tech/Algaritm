// PICK AND OMIT

// 1.Pick<T , K> faqat tanlangan qiymatlaarni oladi  

interface IUser {
  name: string;
  age: number;
  address: string;
  avatar: string;
  phone: number;
}

type UserContactProporties = Pick<IUser, "phone" | "address">;

// 2.Omit<T, K> keraksiz qiymatlarni olip tashlaydi 

type UserInfoProporties = Omit<IUser , "phone" | "address">
