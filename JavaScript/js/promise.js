const metMethods = {
    printMyname() {
        console.log(this.name)
    },

    printMyAge() {
        console.log(this.age)
    },

    printFullname(surname){
        console.log(this.name , surname)
    }
}

const emp1 = { name: 'javohir', age: 21 }
const emp2 = { name: 'jalol', age: 20 }

// metMethods.printMyname.call(emp1)
// metMethods.printMyname.call(emp2)
// metMethods.printMyAge.call(emp1)
// metMethods.printMyAge.call(emp2)
// metMethods.printFullname.call(emp1 , 'suvonov')
// metMethods.printFullname.call(emp2 , 'toshtemirov')