<script setup lang="ts">
// 练习插槽
import MyCategory from "./components/MyCategory.vue";
import {reactive,ref} from "vue";
let dataList=reactive({
    foods:['火锅','烧烤'],
    games:['斗地主','炸金花'],
    film:['孤独','好莱坞']
})

</script>

<template>
    <div class="mycontainer">
        <MyCategory title="美食" :dataList="dataList.foods">
            <template v-slot:center>
                <img  src="https://api.isoyu.com/bing_images.php">
            </template>
            <template v-slot:footer >
                <a    href="baidu.com">百度</a>
            </template>
<!--            <img  slot="center" src="https://api.isoyu.com/bing_images.php">-->
<!--            <a   slot="footer" href="baidu.com">百度</a>-->
        </MyCategory>
        <MyCategory  title="游戏" :dataList="dataList.games">
            <ul>
                <li v-for="(item,index) in dataList" :key="index">{{item}}------{{item}}----{{index}}</li>
            </ul>
        </MyCategory>
        <MyCategory title="电影" :dataList="dataList.film">
            <img src="https://api.isoyu.com/bing_images.php">
        </MyCategory>
    </div>
</template>

<style scoped>
.mycontainer{
    display: flex;
    justify-content: space-around;
}
img{
    width: 100%;
}
</style>

