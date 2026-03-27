const obj = {
  name: "Javohir",
  greet: function() {
    console.log(this.name);
  }
}

const fn = obj.greet;
fn.call(obj)