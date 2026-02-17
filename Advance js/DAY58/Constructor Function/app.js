function person(name,age)
{
    this.name=name
    this.age=age
}
 person.prototype.sayHi= function()
 {
    console.log(`My ${this.name} and my age is ${this.age}`)
 }

const p1=new person("Vibhor",34)
console.log(p1)
p1.sayHi()