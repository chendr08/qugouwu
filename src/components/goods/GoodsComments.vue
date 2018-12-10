<template>
    <div>
        <!-- 1.3 引入子组件 -->
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
// 1.1导入子组件
import comment from '../subcomponents/Common.vue'

export default {
    components: {
        //1.2注册子组件
        comment
    }
}
</script>

<style lang="scss" scoped>

</style>