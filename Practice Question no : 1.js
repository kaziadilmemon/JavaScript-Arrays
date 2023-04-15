/* Question : Create an array of numbers and take input from the user to add numbers to this array: */

let arr = [1, 2, 3, 4, 5, 6, 7, 83]
 let a = prompt("Enter a number")
 a = Number.parseInt(a)
 arr.push(a)
 console.log(arr)


/* Keep Adding numbers to the array in above question untill 0 is added to the array: */

let arr=[1,2,3,4,5,6,7,83]
let a;
do{
    a = prompt("Enter a number")
 a = Number.parseInt(a)
 arr.push(a)
}
  while(a!=0)
console.log(arr)


