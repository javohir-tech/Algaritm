/**
 * @param  {string[][]} paths
 * @return {string}
*/

function destCity(paths) {
    const new_set = new Set()
    for (const path of paths) {
        new_set.add(path[1])
    }   
    for (const path  of paths) {
        if(new_set.has(path[0])){
            new_set.delete(path[0])
        }
    }
    return [...new_set.values()][0]
}

let paths = [["B", "C"], ["D", "B"], ["C", "A"]]
// let paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]

console.log(destCity(paths))