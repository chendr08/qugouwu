<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' style="height: 25px;">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="getChangeNumber" ref="num" readonly/>
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
           this.$store.commit('updateShopNumber', {
               id: this.goodsid,
               count: this.$refs.num.value
           })
        }
    },
    props: ["initCount","goodsid"]
}
</script>

<style lang="scss" scoped>

</style>
