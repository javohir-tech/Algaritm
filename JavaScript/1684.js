/**
 * @param {string} allowed
 * @param {stirng[]} words
 * @return {number}
*/

function countConsistentStrings(allowed, words) {
    let set = new Set(allowed)

    let count = 0;

    for (const word of words) {

        let ok = true

        for (const ch of word) {
            if(!set.has(ch)){
                ok = false
                break
            }
        }

        if (ok) count++
    }

    return count
}


let allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"]

console.log(countConsistentStrings(allowed, words))

// console.log("asd".split("").findIndex(a => a === "b"))
