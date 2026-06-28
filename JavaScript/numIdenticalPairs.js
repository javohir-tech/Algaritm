/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in obj)) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]] += 1
        }
    }
    const nums_values = Object.values(obj)
    let sum = 0
    for (let i = 0; i < nums_values.length; i++) {
        let temp_sum = nums_values[i]*(nums_values[i] + 1) / 2   
        sum += temp_sum - nums_values[i]
    }

    return sum
};


const nums = [1, 2, 3, 1, 1, 3]
console.log(numIdenticalPairs(nums))