const p =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('123')
        reject('456')
    },5000)

})
p.then((value)=>{
    console.log('成功了',value)
},(reason)=>{
    console.log('失败啊',reason)
})
