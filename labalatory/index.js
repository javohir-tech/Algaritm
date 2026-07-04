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

const getUsers = async () => {
    try {
        const baseURL = "https://jsonplaceholder.typicode.com"
        const [users, posts] = await Promise.all([
            fetch(`${baseURL}/users`)
            .then(res =>{
                if(!res.ok){
                    throw new Error(`HTTP xatolik : ${res.status}`)
                }
                return res.json()
            }),
            fetch(`${baseURL}/posts?_limit=10`).then(res => res.json())
        ])
        console.log(posts, users)
    } catch (error) {
        console.log(error)
    }
}

getUsers()