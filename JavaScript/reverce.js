/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let strArr = s.split(" ")
    let result = ""
    for (let i = 0; i < strArr.length; i++) {
        const temp_word = strArr[i].split("").reverse().join("")
        result += temp_word + " "
    }
    return result.trimEnd()
};

const s = "Let's take LeetCode contest"

console.log(reverseWords(s))

// const s = "     cccccc cccccccc   "
// console.log(s.trimEnd())