/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let value = 0
    for (const operation of operations) {
        temp_operation = operation.replace("X" , "")
        if(temp_operation === "--"){
            value--
        }else if(temp_operation === "++"){
            value++
        }
    }
    return value
};

const operations = ["--X", "X++", "X++"]
console.log(finalValueAfterOperations(operations))