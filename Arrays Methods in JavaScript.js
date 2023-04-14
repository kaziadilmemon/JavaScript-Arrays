/* There are some important Array Methods in JavaScript Some of them are as follows: 

toString() : This methods converts an array to a String of Comma Separated Values. */

let num=[1,2,3,34,4]
let b=num.toString() // b is now a String.
console.log(b,typeof b)

// join() :  This method joins all the array elements using a seperator. 
let c=num.join(" and ")
console.log(c,typeof c)

// pop() : This method removes last element from the array 
let r=num.pop() // pop returns the poped element.
console.log(num,r)

// push() : This method adds a new element at the end of the array.
let r=num.push(6) // push returns the new array length
console.log(num,r)

// Shift() : This method removes first element and returns it.
let r=num.shift()
console.log(r,num)

/* unshift() : This method Adds element to the beginning and Returns new 
 array length. */
let r=num.unshift(78)
console.log(r,num)
