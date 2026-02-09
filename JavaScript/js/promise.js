////// first classs function

const res = heyhello()
console.log(res)

function greet(helloFunc , name){
    console.log(`${helloFunc()} ${name}`)
}

greet(heyhello , 'javohir')

function heyhello(){
    return "hello"
}


