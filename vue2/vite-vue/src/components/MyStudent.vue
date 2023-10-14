<template>
  <h1>学生信息</h1>
  <h2>学生名字：{{student.name}}</h2>
  <h2>学生年龄：{{student.age}}</h2>
<!--  <h2 v-show="sex">学生性别：{{sex}}</h2>-->
</template>

<script>
export default {
    name: "MyStudent",
    // props:['sex'],
    setup(){
        // console.log('------',props)
        let student=reactive({
            name:'张三',
            age:18
        })
        return{
            student
        }
    }
}
</script>

<style scoped>

</style>