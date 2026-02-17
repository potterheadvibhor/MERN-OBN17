// // class student {
// //       name="vibhor"
// //       standard=5
// //       age=7
// // }


// // var s1=new student()
// // console.log(s1)


// class student2{
//     constructor(n,s,a)
//     {
//         this.name=n
//         this.standard=s
//         this.age=a
//     }
//     greet()
//     {
//         console.log(`hello from ${this.name}`)
//     }
// }

// var s2=new student2("sanil",5,78)
// // var s3=new student2("sanil1",5,78)
// // var s4=new student2("sanil2",5,78)
// console.log(s2.greet())
// console.log(s3)
// console.log(s4)


// var arr=new Array(10)
// var obj=new Object()
// console.log(arr) 
// console.log(obj) 




// class rectangle{
//     constructor(ln,bt)
//     {
//         this.length=ln
//         this.breath=bt
//     }
//     area()
//     {
//         return this.length*this.breath
//     }
// }

// const rec=new rectangle(3,4)
// console.log("Area of Rectangle",rec.area())




// class BankAccount{
//     constructor(n,am)
//     {
//         this.name=n
//     this.amount=am
    
// }
//     withdraw(withdrawamount)
//     {
//        if(withdrawamount>this.amount)
//        {
//         console.log(`Insuffecient Balance ${this.amount}`)
//         return
//        }
//        this.amount-=withdrawamount
//     }
//     deposit(depositAmount)
//     {
//          this.amount+=depositAmount
//          console.log(`Amount Deposited ${depositAmount}`)
//          console.log(`Balance ${this.amount}`)
//     }
//     showbalance()
//     {
//        console.log(`Balance ${this.amount}`)
//     }
// }


// const ba=new BankAccount("Vibhor",5000)
// ba.showbalance()
// ba.withdraw(6000)
// ba.showbalance()
// ba.deposit(1000)
// ba.showbalance()





/// trying to make shopping cart using classes

class Product{

    constructor(n,p)
    {
this.name=n
this.price=p
    }
}



class ShoppingCart{

  constructor()
  {
    this.cart=[]
  }

    addProduct(product)
    {
   if(!(product instanceof Product ))
   {
    console.log("Invalid Product")
    return
   }
   this.cart.push(product)
   console.log("Product added to cart")
    }
    clearCart()
    {
        this.cart=[]
    }
    getTotal()
    {
        let sum= this.cart.reduce((accu,value)=> accu+value.price,0)
        return sum
    }
    removeProduct(productName)
    {
let newCart=this.cart.filter((p)=>
    p.name != productName
)
console.log("Product Removed From ths cart")
this.cart=newCart
    }
}


const ca=new ShoppingCart()
ca.addProduct(new Product("mouse",300))
ca.addProduct(new Product("keyBoard",700))
ca.addProduct(new Product("monitor",30000))


 console.log(ca.cart)
// console.log(ca.getTotal())

ca.removeProduct("mouse")
console.log(ca.cart)