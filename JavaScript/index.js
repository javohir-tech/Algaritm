function outer(){
    let count = 0
    return function(){
        return function(){
            count++
            return count
        }
    }
}


const inner = outer()

const increment = inner()

console.log(increment())
console.log(increment())
console.log(increment())