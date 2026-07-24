enum Directions {
  UP = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Rigth",
}

// console.log(Directions.UP);
// console.log(Directions.Down);
// console.log(Directions.Left);
// console.log(Directions.Right);

// const up: Directions = Directions.UP;
// console.log(up)

function getInfo(direction: Directions): string {
  if (direction === Directions.UP) {
    return Directions.UP;
  } else if (direction === Directions.Down) {
    return Directions.Down;
  } else if (direction === Directions.Left) {
    return Directions.Left;
  }

  return Directions.Right;
}

const res = getInfo(Directions.Down)

console.log(res)
