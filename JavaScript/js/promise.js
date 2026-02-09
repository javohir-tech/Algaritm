const done =  true

const  promise1 = new Promise((resolve , reject)=>{
    if(done)  resolve("done1")
    else reject('error1')
})
const  promise2 = new Promise((resolve , reject)=>{
    if(!done)  resolve("done2")
    else reject('error2')
})
const  promise3 = new Promise((resolve , reject)=>{
    if(done) resolve("done3")
    else reject('error3')
})


const all =  Promise.race([promise1 , promise2 , promise3])

all.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})