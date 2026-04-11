const longestPalindrome = (s) => {
    const arr = s.split("")
    let acc = 0
    let response = []

    while (acc < arr.length) {
        let i = acc
        let j = arr.length - 1

        const res = []

        while (i <= j) {
            if (arr[i] === arr[j]) {
                res[i] = arr[i]
                res[j] = arr[j]
                i++
                j--
            }else{
                if(res.length > 0){
                    break
                }
                j--
            }
        }

        const cleaned = res.filter(()=>true)
        if(cleaned.length > response.length){
            response = cleaned
        }
        acc++
    }

    return response.join("")
}

let s = "babad"
let b = "cbbd"

console.log(longestPalindrome(s))
console.log(longestPalindrome(b))