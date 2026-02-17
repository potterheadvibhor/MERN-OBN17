// //Encapsulation🔹 Definition:
// // Wrapping data and methods into a single unit and restricting direct access to internal data.
// //Abstraction  :🔹 Definition:
// // Hiding internal implementation details and exposing only necessary functionality.

// // User does not need to know internal working.
// class BankAccount{
//     #name
//     #balance
//     constructor(n,b)
//     {
//         this.#name=n
//         this.#balance=b
//     }
//     checkBalane()
//     {
//         console.log(`Blance is ${this.#balance}`)
//     }
//     withdraw(amount)
//     {
// if(amount> this.#balance)
// {
//   console.log("Insuffecent Balance")
//   return
// }
// this.#balance-=amount
// console.log(`Remaining  Balance  ${this.#balance} `)
//     }
//     deposit(amount)
//     {
//         this.#balance+=amount
//         console.log(`New Balance  ${this.#balance} `)

//     }
// }

// const BA=new BankAccount("Aman",20000)
// BA.checkBalane()
// BA.deposit(1000)
// BA.withdraw(200)
// BA.checkBalane()



// //INheritance
// class animal
// {
//     speak()
//     {
//         console.log("Animal Speaks")
//     }
// }

// class dog extends animal
// {
//     barks(){
//         console.log("Dog Barks")

//     }
// }

// const d=new dog()
// d.barks()
// d.speak()

// // inheritance we use super keyborad
// class vehicle{
//     constructor(c,f,s)
//     {
//         this.color=c
//         this.fuel=f
//         this.speed=s
//     }
// }

// class LandVehicle extends vehicle{
//     constructor(c,f,s,t,gc)
//     {
//         super(c,f,s)
//         this.tyre=t
//         this.gate=gc
//     }
// }

// const lv=new LandVehicle("red","petrol","200","Four","5door")

// console.log(lv)

// //inhertance over private data and method 
// // so it in not allowed for child class to directly acces the private method and data but it is possible by using public/protected method

// class h1{
//     #name="ayush"
  
//    printName() {
//        console.log(`This name is ${this.#name}`)
//     }
//     #printdate()
//     {
//         console.log("hello naya naam")
//     }
// }


// class h2 extends h1{

//     printthename()
//     {
    
//     }

// }
// const h=new h2()

// console.log(h.printName())
// console.log(h.#printdate()) //not allowed


//Polymorphism in js 
//Same method name → different behavior
// in js method overriding(Runtime polymorphism) is only possible not method overLoading(Compiletime Polymorphism)
//method oerrinding is when different class have same function name in ingeritance
//Method overloading is a feature in OOP where multiple methods have the same name but different parameter lists (different number or type of parameters).



class animal{
    speak()
    {
        console.log("Animal speaks")
    }
}
class dog extends animal{
    speak()
    {
        console.log("Dog speaks")
    }
}
class cat extends animal{
    speak()
    {
        console.log("cat speaks")
    }
}

const d=new dog()
const c=new cat()

c.speak()
c.speak()



//duck typing :- Runtime polymorphism without inheritance

class car{
    start(){
   console.log("car start")
    }
}
class scooter{
    start()
    {
        console.log("scooter start")
    }
}


function h(vehicle)
{
   vehicle.start()
}

h(new car())
h(new scooter())

