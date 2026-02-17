class a{
    constructor(n)
    {
this.name=n
    }
}
class b extends a{
    constructor(n,s)
    {
        super(n)
this.standard=s
    }
}
class c extends b{
    constructor(n,s,add)
    {
        super(n,s)
this.address=add
    }
}

let f=new a("Vibhor")
let f2=new b("Vibhor2","11thA")
let f3=new c("Vibhor3","10thA","Bahubali nagar")
console.log(f)
console.log(f2)
console.log(f3)

console.log(c.prototype.__proto__)