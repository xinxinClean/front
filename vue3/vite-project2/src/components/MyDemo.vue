<template>
<h2>姓名：{{person.name}}</h2>
<h2>年龄：{{person.age}}</h2>
<h2>薪资：{{person.job.j2.salary}}</h2>
</template>

<script>
import {reactive} from "vue";

export default {
    name: "MyDemo",
    setup(){
        let person=reactive({
            name:'张三',
            age:18,
            job:{
                j1: {
                    salary: 10
                },
                j2: {
                    salary: 20
                }
            }
        })
        return{
            person
        }
    }
}
</script>

<style scoped>

</style>