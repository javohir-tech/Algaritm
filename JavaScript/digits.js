function addDigits(num) {
    if (num % 10 === num) return num
    const numbers = []

    while (num !== 0) {
        let temp_num = num % 10
        numbers.push(temp_num)
        num = (num - temp_num) / 10
    }

    const sum = numbers.reduce((a, b) => a + b, 0)
    if (sum % 10 !== sum) {
        return addDigits(sum)
    }

    return sum
}

const num = 382341
console.log(addDigits(num))

// console.log(387%100)