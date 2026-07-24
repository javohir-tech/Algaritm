"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
    Directions["UP"] = "Up";
    Directions["Down"] = "Down";
    Directions["Left"] = "Left";
    Directions["Right"] = "Rigth";
})(Directions || (Directions = {}));
// console.log(Directions.UP);
// console.log(Directions.Down);
// console.log(Directions.Left);
// console.log(Directions.Right);
// const up: Directions = Directions.UP;
// console.log(up)
function getInfo(direction) {
    if (direction === Directions.UP) {
        return Directions.UP;
    }
    else if (direction === Directions.Down) {
        return Directions.Down;
    }
    else if (direction === Directions.Left) {
        return Directions.Left;
    }
    return Directions.Right;
}
const res = getInfo(Directions.Down);
console.log(res);
//# sourceMappingURL=index.js.map