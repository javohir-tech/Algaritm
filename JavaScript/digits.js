/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum = 0
    while (num / 10 !== 0) {
        let last_num = num % 10
        sum += last_num
        num = (num - last_num)/10
    }

    if (sum % 10 !== sum) {
        return addDigits(sum)
    }

    return sum
};


const num = 38

console.log(addDigits(num))
