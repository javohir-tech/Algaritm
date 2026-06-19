/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        res.push([i , j , k])
                    }
                }
            }
        }
    }

    return res.length
};


let nums = [0, 1, 4, 6, 7, 10]
let diff = 3

console.log(arithmeticTriplets(nums , diff))