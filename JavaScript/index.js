const lengthOfLongestSubstring = (text) => {
    const arr = text.split("")
    let resLen = 0

    for (let i = 0; i < arr.length; i++) {
        const temp = [arr[i]]
        for (let j = i + 1; j < arr.length; j++) {
            if (!temp.includes(arr[j])) {
                temp.push(arr[j])
            } else {
                break
            }
        }
        if(resLen  < temp.length){
            resLen = temp.length
        }
    }

    return resLen
}


let s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))
