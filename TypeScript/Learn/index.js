"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    name: "iphone",
    id: 101,
    price: 800,
    expect: "chess",
};
// 1 .Required
// expect optional lekin berish kerak sabab Required ishlatilgan
// typeni hamma proportylarini majburiy qilip qo'yadi qilip qo'yadi 
function createProduct(product) {
    return product;
}
console.log(createProduct({ name: "samsung", price: 500, id: 102, expect: "chess" }));
// 2 .Partial 
// product Partial berilgan shuning uchun istalgan propotyni uztsa boladi 
// typeni hamma proportylarini optoinal qilip qo'yadi
function updatedProduct(updateProduct) {
    const updatedProduct = { ...product, ...updateProduct };
    console.log(updatedProduct);
}
console.log(product);
updatedProduct({ price: 600 });
const product2 = {
    name: "honor",
    price: 400,
    id: 303
};
// product2.name = "Redmi" //Error 
//# sourceMappingURL=index.js.map