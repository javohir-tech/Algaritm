/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max_sentence = 0
    for (const word of sentences) {
        const word_length = word.split(" ").length
        if (word_length > max_sentence) {
            max_sentence = word_length
        }
    }

    return max_sentence
};

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences))