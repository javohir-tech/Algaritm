function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let temp_target = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (temp_target + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

const args = [3,2,4]
const target = 6

console.log(twoSum(args, target))