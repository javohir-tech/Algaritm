/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            let temp_num = map.get(arr[i])
            temp_num += 1
            map.set(arr[i], temp_num)
        }
    }

    const values = [...map.values()]

    const sorted_values = values.sort((a, b) => a - b)
    for (let i = 0; i < sorted_values.length; i++) {
        if (sorted_values[i]=== sorted_values[i+1]){
            return false
        }
    }

    return true
};


const arr = [1, 2]
console.log(uniqueOccurrences(arr))