// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const success = true

//         if(success){
//             resolve("yaxshi yakunlandi !!!")
//         }else{
//             reject("xatolikga uchradi")
//         }

//     })
// })

// promise
// .then((res)=>{
//     console.log(res)
// })
// .catch(err=>console.log(err))

// async function salom(){
//     return "salom"
// }

// console.log(salom())
// salom().then(res=>console.log(res))

const getUsers = async ()=>{
    try {
        const respose = await fetch("https://jsonplaceholder.typicode.com/users")
        const res  = await  respose.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

getUsers()