let array=[1,2,3,4,5]
let array2=array.map((item)=>{
      return item=item+10;
})
console.log(array.toString())
console.log(array2.toString())
console.log(array2===array)