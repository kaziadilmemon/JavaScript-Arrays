// Question no : 3 filter for numbers divisible by 10 from a given array.

let arr=[1,2,30,4,50,6,7,83,670]
let n = arr.filter((x)=>{
  return x%10==0
})
console.log(n)

