const done  =  false 

const myPromise =  new Promise((resolve ,  reject)=>{
    if(done){
        const workDone =  'ishladi bratishka'
        resolve(workDone)
    }else{
        const sabab = "afsuss  ishlamadi"
        reject(sabab)
    }
}).then(res=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})