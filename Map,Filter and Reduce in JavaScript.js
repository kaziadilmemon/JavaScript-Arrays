/* map() : map() creates a new array by performing some opertaion on each array element. */
let arr=[45,23,21]
//Array Map Method
let a=arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value+index
})
/* filter() : filter an array with values that passes a test.creates a new array.*/
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((a)=>{
  return a<10
})
console.log(a2)

// reduce() : Reduces an array to single value.
let arr3=[1,2,3,5,2,1]
const reducefunc =(h1,h2)=>{
  return h1+h2
}
let newarr3=arr3.reduce(reducefunc)
console.log(newarr3)

