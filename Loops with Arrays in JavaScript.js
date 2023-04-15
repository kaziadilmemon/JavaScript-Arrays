let num=[3,5,1,2,4]
for(let i=0;i<num.length;i++){
  console.log(num[i])
}
// Array.from
let name="Adil"
let arr=Array.from(name)
console.log(arr)

// for....of
for(let i of num){
  console.log(i)
}

// for.....in
for(let item of num){
  console.log(item)
}
