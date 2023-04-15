// Delete : Array elements can be deleted using the delete operator.
let d=[7,8,9,10]
console.log(d.length)
delete d[2]
console.log(d)
console.log(d.length)

// concat() : This is a method which Returns a new array does not change existing array.
let n1=[1,2,3,4,5,6]
let n2=[7,8,9,10,11]
let n3=n1.concat(n2)
console.log(n3)

// sort() : This is a method which is used to sort an array alphaetically.
let num=[551,22,3,14,5,6,7,8,229]
num.sort()
console.log(num)
// sort takes an optional compare function. If this function is provided as the first argument, the sort() function will consider these values(the values returned from compare function) as the basis of sorting.
let compare=(a,b)=>{
  return b-a   // a-b for ascneding order
}
let num=[551,22,3,14,5,6,7,8,229]
num.sort(compare)
console.log(num) 

// reverse() : This method reverse the elements in the source array.
let a=[1,2,3,4,5,6]
a.reverse()
console.log(a)

//  splice() : This method splice can be used to add new items to an array.
const numbers=[1,2,3,4,5]
numbers.splice(2,3,23,24)
console.log(numbers) // Here 2 position to add index in that, In 3 how much no of elements to be added and 23,24 elements to be added.
let num=[551,22,3,14,5,6,7,8,229]
num.splice(2,3,1021,1022,1023,1024,1025)
console.log(num)
let deletedvalues= num.splice(2,4,1021,1022,1023,1024,1025)
console.log(num)
console.log(deletedvalues)

// slice() : This method slices out a piece from an array. it creates a new Array.
let newnum=num.slice(3,5)
console.log(newnum)
