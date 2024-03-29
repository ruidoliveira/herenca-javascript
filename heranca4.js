function MeuOBjeto(){}
console.log(MeuOBjeto.prototype)

const obj1 = new MeuOBjeto
const obj2 = new MeuOBjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuOBjeto.prototype === obj1.__proto__)

MeuOBjeto.prototype.nome = 'Anônimo'
MeuOBjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}   

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuOBjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo

console.log((new MeuOBjeto).__proto__ === MeuOBjeto.prototype)
console.log(MeuOBjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)