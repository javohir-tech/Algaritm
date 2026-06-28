/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i] in obj) {
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++
        }
    }

    console.log(obj)
};


const nums = [1, 2, 3, 1, 1, 3]
console.log(numIdenticalPairs(nums))