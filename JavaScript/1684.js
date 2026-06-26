/**
 * @param {string} allowed
 * @param {stirng[]} words
 * @return {number}
*/

function countConsistentStrings(allowed, words) {
    let sum = 0
    let arr_allowed = allowed.split("")
    for (let i = 0; i < words.length; i++) {
        let word_arr = words[i].split("")
        let she_said_yes = true
        for (let j = 0; j < word_arr.length; j++) {
            if (arr_allowed.findIndex(a => a === word_arr[j]) === -1) {
                she_said_yes = false
            }
        }

        if (she_said_yes) {
            sum++
        }

    }
    return sum
}


let allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"]

console.log(countConsistentStrings(allowed, words))

// console.log("asd".split("").findIndex(a => a === "b"))
