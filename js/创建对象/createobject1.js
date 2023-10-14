
const vm ={
    el:'#app',
    render:(h)=>{
        console.log('123')
    },
    methods:{
        add1(){
            console.log('add1方法执行了')
            return 'add1'
        },
        add2: function () {
            console.log('add2方法执行了')
            return 'add2'
        }
    }
}
console.log(vm.methods.add1())
console.log(vm.methods.add2())
