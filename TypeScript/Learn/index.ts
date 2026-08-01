interface IHas {
    id : number
}

const obj : IHas = {
    id : 1
}

interface IProduct {
    id : number ; 
    title : string ;
}

const product1  : IProduct ={
    id : 12 ,
    title : "Iphone"
}

function getId<T extends IHas>(arg : T):number{
    return arg.id
}

console.log(getId<IHas>(obj))
console.log(getId<IProduct>(product1))