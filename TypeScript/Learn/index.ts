// ReturnType<T> funksiyadan qaytgan qiymat tipini olish uchun

function calc(a: number, b: number): number {
  return a + b;
}

type CalcReturnType = ReturnType<typeof calc>;

type CalcParametrs = Parameters<typeof calc>

const params : CalcParametrs = [1 , 2]

const res: CalcReturnType = calc(...params);
console.log(res)
