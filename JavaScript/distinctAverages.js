/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    const new_set = new Set()
    while (nums.length !== 0) {
        const max_value = Math.max(...nums)
        const min_value = Math.min(...nums)
        let distinc = (max_value + min_value) / 2
        new_set.add(distinc)
        const max_index = nums.findIndex(n => n === max_value)
        nums.splice(max_index , 1)
        const min_index = nums.findIndex(n => n === min_value)
        nums.splice(min_index , 1)
        
    }
    return [...new_set.values()].length
};

const nums = [4, 1, 4, 0, 3, 5]
console.log(distinctAverages(nums))