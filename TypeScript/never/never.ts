function throwError(message : string) : never {
    throw new Error(`Error : ${message}`)
}

async function useFetch(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/uss")
        if(!response.ok){
            throwError("Texnik xatolik")
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        throwError("Xatolik  catch bloackda ")
    }
}

useFetch()