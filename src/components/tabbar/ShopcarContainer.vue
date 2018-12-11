<template>
    <div class="shopcar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list" >
            <div class="mui-card" v-for="(item ,i) in goodsLists" :key="item.id">
		    	<div class="mui-card-content">
		    		<div class="mui-card-content-inner">
		    			<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                         @change="getSelectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" >
                        <div class="goods-info">
                            <h3>{{ item.title }}</h3>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span> 
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id ,i)">删除</a>
                            </p>
                        </div>
		    		</div>
		    	</div>
		    </div>

        </div>
        <!-- 商品结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，
                        总价：<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>  </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import numbox from '../subcomponents/ShopCarNumber.vue'
export default {
    data(){
        return {
            //商品列表信息
            goodsLists: [
                {
                    cou: 1,
                    id: 1,
                    title: 'vivo x23全面屏手机 照亮你的美',
                    sell_price: 2099,
                    thumb_path: 'https://m.360buyimg.com/babel/jfs/t22237/324/516472310/186176/5b3ad52d/5b0fc15aNa92ad79a.jpg!q70.jpg'
                },
                {
                    cou: 1,
                    id: 2,
                    title: '华为荣耀 人工智能AI全面屏手机 最懂你',
                    sell_price: 2099,
                    thumb_path: 'https://m.360buyimg.com/babel/jfs/t30184/230/476184793/260944/53cc2bbc/5bf4b25dN3b673c83.jpg!q70.jpg'
                },
                {
                    cou: 1,
                    id: 3,
                    title: 'OPPO 金属质感系列 多色可选',
                    sell_price: 2099,
                    thumb_path: 'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg'
                },
                {
                    cou: 1,
                    id: 4,
                    title: '小米 MAX2拍照更清晰 闪耀黑系列',
                    sell_price: 2099,
                    thumb_path: 'https://m.360buyimg.com/babel/jfs/t1/1867/31/11716/401006/5bd072f8E6db292ab/f3610e2e816ade0f.jpg!q70.jpg'
                }
            ] ,
            goodsList: []
        };
    },
    created(){
        this.getShopcarInfo();
    },
    methods:{
        getShopcarInfo(){ //获取购物车列表数据
            //获取到store中所有的商品id，然后拼出一个用逗号隔开的字符串
            var idArr = [] ;
            this.$store.state.car.forEach(item => idArr.push(item.id));
            //如果购物车中没有商品则直接返回，不需要请求数据接口，否则会报错
            if(idArr.length <= 0){
                return;
            }
            //获取购物车商品列表
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result =>{
                if(result.body.status === 0){
                    this.goodsList = result.body.message;
                }
            });
        },
        remove(id ,i){ //删除购物车中加购的商品
            //删除购物车页面的商品列表中的商品信息、从第i个开始删，删除一个
            this.goodsLists.splice(i , 1);
            //删除store中对应id的数据
            this.$store.commit('removeGoods',id);
        },
        getSelectedChange(id,val){ //把switch开关是否选中的值同步到store中
            // console.log(id+'-------'+val);
            this.$store.commit('updateSelected',{id: id, selected: val});
        }
    },
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center; //垂直方向居中
            }
            img{
                width:60px;
                height: 60px;
            }
            .goods-info{
                // display: flex;
                // flex-direction: column;
                // justify-content: space-between ;
                h3{
                    font-size: 13px;
                }
                p{ 
                    margin-bottom: 0;
                    margin-top: 10px;
                    .price{
                        color: red;
                        font-weight: bold;
                        font-size: 13px;
                    }
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center; //纵向垂直居中
            .red{
                font-size: 16px;
                font-weight: 700;
                color: red;
            }
        }
    }
</style>