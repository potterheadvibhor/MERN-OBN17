// var x = 5;

// function x() {
//   console.log("x function");
// }

// console.log(x);

// h();

// function h() {
//   console.log("Function h");
// }

// var h = 99;

// console.log(h);

// function h() {
//   return "hello";
// }

// var h = 10;
// console.log(h);

// foo();

// var foo = 10;

// function foo() {
//   console.log("foo function");
// }

// console.log(a);

// function a() {
//   return 1;
// }

// var a;
// console.log(a);

// console.log(m);

// var m = function () {
//   console.log("m function");
// };

// function m() {
//   console.log("m declared");
// }

// console.log(m);

// function z() {
//   console.log("z1");
// }

// console.log(z);

// var z = 100;

// function z() {
//   console.log("z2");
// }

// console.log(z);

// function f() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// f();


// function f() {
//   console.log(b);
//   let b = 20;
// }
// f();

// var x = 5;

// function test() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }

// test();

// let x = 100;

// function demo() {
//   console.log(x);
//   var x = 50;
// }

// demo();

// let p = 1;

// {
//   console.log(p);
//   let p = 2;
// }

// function fun() {
//   console.log(k);
//   const k = 99;
// }
// fun();

// function f(a) {
//   console.log(a);
//   var a = 50;
//   console.log(a);
// }
// f(10);


// function f(a) {
//  let a = 20;
//   console.log(a);
// }
// f(5);

// let n = 10;

// function outer() {
//   console.log(n);

//   {
//     let n = 20;
//     console.log(n);
//   }

//   console.log(n);
// }

// outer();

let x = 10;

function outer() {
  function inner() {
    console.log(x);
    let x = 99;
  }
  inner();
}

outer();
