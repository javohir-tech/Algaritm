"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Count {
    count = 0;
    increment() {
        console.log(this.count);
        this.count++;
    }
}
const c = new Count();
// c.increment();
const func = c.increment.bind(c);
func();
func();
//# sourceMappingURL=thiskey.js.map