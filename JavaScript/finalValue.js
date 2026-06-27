/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let value = 0
    for (const operation of operations) {
       if(operation.includes("+")){
        value++
       }else if(operation.includes("-")){
        value--
       }
    }
    return value
};

const operations = ["--X", "X++", "X++"]
console.log(finalValueAfterOperations(operations))