<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="getChangeNumber" ref="num"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
    
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{

        };
    },
    mounted(){
        //初始化组件
        mui('.mui-numbox').numbox();
    },
    methods:{
        getChangeNumber(){ //监听购买数量的改变
            this.$emit('getNumber', parseInt(this.$refs.num.value));
        }
    },
    props: ["max"],
    watch:{
        //属性监听
        max: function(newVal,oldVal){
            mui('.mui-numbox')
            .numbox()
            .setOption("max", newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
