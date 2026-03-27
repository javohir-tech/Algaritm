///////////////////////////// Enums ////////////////////////////

// enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// console.log(Directions.Up); // Output: 0
// console.log(Directions.Down); // Output: 1
// console.log(Directions.Left); // Output: 2
// console.log(Directions.Right); // Output: 3

enum Directions {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// const move : Directions = Directions.Up

// console.log(move)

const handler = (directions : Directions) =>{
    if(directions === Directions.Up){
        return "You are moving up!"
    }else if(directions === Directions.Down){
        return "You are moving down!"
    }else if(directions === Directions.Left){
        return "You are moving left!"
    }else if(directions === Directions.Right){
        return "You are moving right!"
    }
}   

const movingUp= handler(Directions.Up)

console.log(movingUp)

// console.log(Directions.Up)


