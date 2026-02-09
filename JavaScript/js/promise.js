function fistFunction(){
    return function(){
        console.log("hello")
    }
}

const res = fistFunction()
res() //// first class function