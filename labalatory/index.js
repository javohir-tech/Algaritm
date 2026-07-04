const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const success = true

        if(success){
            resolve("yaxshi yakunlandi !!!")
        }else{
            reject("xatolikga uchradi")
        }

    })
})

promise
.then((res)=>{
    console.log(res)
})
.catch(err=>console.log(err))