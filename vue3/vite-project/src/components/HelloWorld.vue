<script setup lang="ts">
import { ref,watch } from 'vue'

defineProps<{ msg: string }>()
let sum = ref(0)
const count = ref(0)
// 监视ref定义的一个响应式数据
watch(sum,(newValue,oldValue)=>{
    console.log('改变了');
    console.log('改变之前',oldValue)
    console.log('改变之后',newValue)

})
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ sum }}</h1>
  <button type="button" @click="count++">count is {{ count }}</button>
  <button @click="sum++">sum变大</button>
  <button v-on:click="sum--">sum减小</button>
</template>

<style scoped>

</style>
