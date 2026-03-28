const obj = {
    name: "Javohir",
    greet: function () {
        console.log(this.name);
    }
}

const fn = obj.greet;
fn.apply(obj)

function makeCounter (){
    let count = 0
    return function (){
        count++
        return count
    }
}

const counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())