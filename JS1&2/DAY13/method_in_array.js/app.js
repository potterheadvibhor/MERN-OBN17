//Methods are inbuilt function 
//they are use to perform some function on the value
// no there are two type of functikn
//destructive:-: They make change in the original data, they are also called Mutating
//Non-destructive-:They retun new copy of the data don't make any changes in the original array.thye are also called Non-Mutating


//destructive methods
//.reverse()
//arr.reverse reverse the array
//arr.revesrse make canges in the same array;
let arr=[1,2,3,4,5,6,7,8,9,10]

console.log(arr);
console.log(arr.reverse());
console.log(arr);

//.at(index)
//get the specificvalue at the given index specific at the index
let arr0=[1,2,3,4,5,6,7,8,9,10]
console.log(arr0.at(6))
console.log("AT "+arr0.at(-1))
console.log(arr0[6])

//.fill(value,start,end)
//it fills the array with the given value from start to the end as agiven in the method
//it make changes in the original array
let arr1=[1,2,3,4,5,6,7,8,9,10]

console.log(arr1.fill("@",2,4));
console.log(arr1);


//arr1.concat(arr2)
// it concat two arry passed in it
// a.concat(b)  :-  b will be concatinated to a and will return a new array  
let arr2=[1,2,3,4,5]
let arr21=[6,7,8,9,10]

console.log(arr2.concat(arr21));
console.log(arr21.concat(arr2));
console.log(arr2);
console.log(arr21);

// .join()
//joins all element of array with the provided strin seprating them and return an string
let arr3=[1,2,3,4,5]
console.log("Join",arr3.join(" "));
console.log(arr3.join("*"));

//include;
//determins wheteher an element is there in array or not and return true or false in bolean
let arr4=[1,2,3,4,5];
console.log(arr4.includes(2))
console.log(arr4.includes(8))


//.slice(start,end)
//it returns asection of array as a new array from sart index to the end index 
// the new array include the start element and the element till end it did not include the end index element
//slice returns an new array did not make any changes in the original array
let arr5=[1,2,3,4,5,6,7,8,9,10]

console.log(arr5.slice(2,6));
console.log(arr5.slice(1,6));
console.log(arr5);
console.log(arr5.slice(6));
// in method we can use negative indexing for array
console.log(arr5.slice(-5,-1));
console.log(arr5.slice(-1));


//splice
let arr6=[1,2,3,4,5,6,7,8,9,10]

console.log(arr6.splice(3,4))   // destructive, remove element from array , return the removed item in new array , in splice first input is the start index and secound is delete count the number that we want to delete
console.log("vhjhgy",arr6);//vhjhgy [ 1, 2, 3, 8, 9, 10 ]

let arr7=[1,2,3,4,5,6,7,8,9,10]

let val = arr7.splice(2,3, true, false,99,100,101)


console.log(arr7)
console.log(val)

//
let arr8=[1,2,3,4,5,6,7,8,9,10]

console.log(arr8.sort());

//every()method in array  



