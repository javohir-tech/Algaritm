/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    const arr = []
    while (nums.length !== 0) {
        console.log(nums)
        const max_value = Math.max(...nums)
        const min_value = Math.min(...nums)
        let distinc = (max_value + min_value) / 2
        arr.push(distinc)
        const max_index = nums.findIndex(n => n === max_value)
        const min_index = nums.findIndex(n => n === min_index)
    }
    // console.log(arr)
};

const nums = [4, 1, 4, 0, 3, 5]
console.log(distinctAverages(nums))