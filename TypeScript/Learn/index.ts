interface IProduct {
name: string;
  id: number;
  price: number;
  expect?: string;
}

const product: IProduct = {
  name: "iphone",
  id: 101,
  price: 800,
  expect: "chess",
};

// 1 .Required
// expect optional lekin berish kerak sabab Required ishlatilgan
// typeni hamma proportylarini majburiy qilip qo'yadi qilip qo'yadi 

function createProduct(product: Required<IProduct>): IProduct {
  return product;
}
console.log(createProduct({ name: "samsung", price: 500, id: 102, expect: "chess" }))

// 2 .Partial 
// product Partial berilgan shuning uchun istalgan propotyni uztsa boladi 
// typeni hamma proportylarini optoinal qilip qo'yadi

function updatedProduct(updateProduct : Partial<IProduct>){
    const updatedProduct = {...product , ...updateProduct}
    console.log(updatedProduct)
}

console.log(product)
updatedProduct({price : 600}) 

// 3. Readonly
// Bu hamma proportylarni readonly qilip qo'yadi va o'zgartiripp  bo'lmaydi

type ReadonlyProduct = Readonly<IProduct>

const product2  : ReadonlyProduct = {
    name  : "honor" , 
    price : 400 , 
    id : 303 
}

// product2.name = "Redmi" //Error 