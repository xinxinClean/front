const p =async function hello() {
    setTimeout(()=>{
        console.log('settimeout  hello')
    },5000)
    await console.log('hhh')
    return 'he'
}
function test() {
    setTimeout(()=>{
        console.log('settimeout test')
    },5000)
    console.log('ceshi')
}
// test()
// p()
console.log(p)