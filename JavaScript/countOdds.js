/** 
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

function countOdds(low, high) {
    if (high < low) return 0
    let res  = 0
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            res += 1
        }
    }

    return  res
}

let low = 3, high = 7
console.log(countOdds(low , high))