<template>
     <div>
        <mt-swipe :auto="2000">
             <mt-swipe-item  v-for="item in lunbotuList" :key="item.img">
                 <img :src="item.img" alt="" :class="{full: isFull}">
             </mt-swipe-item>
        </mt-swipe>
     </div>
</template>

<script>
export default {
    props: ['lunbotuList','isFull'] //接收父组件传过来的数据
}
</script>

<style lang="scss" scoped>
     .mint-swipe {
        height: 200px;//设置轮播图盒子的高
        .mint-swipe-item {
            text-align: center;
            // &:nth-child(1) {
            //     background-color: red;
            // }
            //  &:nth-child(2) {
            //     background-color: blue;
            // }
            //  &:nth-child(3) {
            //     background-color: yellow;
            // }
            img {
                height: 100%;
            }
            .full{
                width: 100%;
            }
        }
    }
</style>
