"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ======================= READONLY ====================
const admins = [1, 2, 3, 4, 5];
// Property 'push' does not exist on type 'readonly number[]'.
// admins.push(6)
// Index signature in type 'readonly number[]' only permits reading.
// admins[0] = 3
console.log(admins);
const persons = [
    {
        firstName: "javohir",
        age: 22,
        isMerried: false,
        address: {
            country: "uzbekistan",
            town: "angren",
            houseNumber: 18,
        },
    },
    {
        firstName: "Ulug'bek",
        age: 24,
        isMerried: false,
        address: {
            country: "uzbekistan",
            town: "angren",
            houseNumber: 18,
        },
    },
];
// Bu objectni persons[0] bilan bir xil type deb qabul qil.
// as typeof persons[0]
//  Index signature in type 'readonly { firstName: string; age: number; isMerried: boolean; address: { country: string; town: string; houseNumber: string | number; }; }[]' only permits reading.
// persons[0] = { ...persons[0], firstName: "minxo" } as typeof persons[0];
// 1 map yangi massiv yaratdi yangi object emas
// 2 array ichida objectlar bilan ishlasa mutatsiyadan qochish uchun spread dan foydalanish kerak
// 3  objectlar reference saqlaydi readonly faqat shu referece manzilni ozgarmasligini taminllaydi
// referece qiymatni olip objectni ozgartirish mumkin
const newArr = persons.map((item) => {
    return {
        ...item,
        age: item.age + 1,
    };
});
console.log(newArr, "newArr");
console.log(persons, "old Array");
const numbers = [1, 2, 3, 4, "uch"];
// numbers.push("salom")
console.log(numbers);
//# sourceMappingURL=index.js.map