class Count {
  count: number = 0;

  increment(){
      console.log(this.count)
      this.count++
  }

//   increment = (): void => {
//     console.log(this.count);
//     this.count++;
//   };
}

const c = new Count();
// c.increment();

// const func = c.increment
const func = c.increment.bind(c);
func();
func();
