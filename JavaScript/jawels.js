/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const my_map = new Map()
    let j_step = 0;
    let s_step = 0;
    const my_jewels = jewels.split("")
    while (j_step !== my_jewels.length) {
        if (!my_map.has(my_jewels[j_step])) {
            my_map.set(my_jewels[j_step], 0)
        }
        for (let i = s_step; i < stones.split("").length; i++) {
            // console.log(stones.split("")[i])
            if (my_jewels[j_step] === stones.split("")[i]) {
                let jewel_sum = my_map.get(my_jewels[j_step])
                jewel_sum += 1
                my_map.set(my_jewels[j_step], jewel_sum)
            }
        }

        j_step += 1

    }

    return [...my_map.values()].reduce((a, b) => a + b, 0)
};

let jewels = "aA"
let stones = "aAAbbbb"

console.log(numJewelsInStones(jewels, stones))