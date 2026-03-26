const cars: string[] = ["bmw", "audi", "lexus"];
const nums: number[] = [1, 2, 4, 5];
const bools: boolean[] = [true, false, true, false, true, true];

const toupparcase = cars.map((item) => item.toUpperCase()).filter(item => item.startsWith('b'));
const snums = nums.map(item => `Numer ${item}`)

console.log(snums)
console.log(toupparcase);
