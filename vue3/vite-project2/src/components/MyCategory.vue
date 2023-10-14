<template>
  <span class="test">
      <h2>{{title}}</h2>
      <slot name="center">当没有传东西时，center显示的默认值</slot>
      <slot name="footer">当没有传东西时，footer显示的默认值</slot>
 </span>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    dataList: object
}>();
function showData(){
    // console.log(props)
    // console.log(dataList)
}
</script>

<style scoped>
span {
    width: 200px;
    height: 300px;
    background-color: skyblue;
}
h2{
    background-color: orange;
    text-align: center;
}
</style>