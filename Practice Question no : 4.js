/* Question no : 4 Use reduce to calculate factorial of a given number from an array of first n
natural numbers.(n being the number whose factorial needs to be calculated). */

let arr=[1,2,3,4,5,6,7,8]
let n= arr.reduce((x1, x2) => {
  return x1*x2 })
console.log(n)

 
