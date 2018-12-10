<template>
    <div class="goodsinfo-container">
        <transition
           @before-enter="beforeEnter"
           @enter="enter"
           @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball" ></div>
        </transition>
        <!-- 商品轮播区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList="lunbotuLists" :isFull="false"></swiper>
				</div>
			</div>
		</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">{{ goodsInfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        市场价：<del>￥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;&nbsp;销售价：<span class="sell-price">￥{{ goodsInfo.sell_price }}</span>
                    </p>
                    <!-- 添加购物车组件 -->
                    <p>购买数量：<numberBox @getNumber="getClickNumber" :max="goodsInfo.stoke_quantity"></numberBox></p>
                    <!-- 添加购物车按钮 -->
                    <div class="goods-btn">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShop">加入购物车</mt-button>
                    </div>
				</div>
			</div>
		</div>
        <!-- 商品详情区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{ goodsInfo.goods_no }}</p>
                    <p>库存情况：{{ goodsInfo.stoke_quantity }}件</p>
                    <p>上架时间：{{ goodsInfo.add_time | dateFormat }}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary"  size="large" plain @click="goGoodsDesc(id)">图文介绍</mt-button>
                <mt-button type="danger"  size="large" plain  @click="goComments(id)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/Swiper.vue'
import numberBox from '../subcomponents/NumberBox.vue'

export default {
    data(){
        return{
           id: this.$route.params.id,
           lunbotuLists:[
               {
                   img: 'https://m.360buyimg.com/babel/jfs/t30778/122/259907197/194717/890a8c8e/5bed356cN07a6b2d8.jpg!q70.jpg'
               },
                {
                   img: 'https://m.360buyimg.com/babel/jfs/t23674/276/2335377666/288755/e7e91d04/5b7bbda1Nf461e2eb.jpg!q70.jpg'
               },
                {
                   img: 'https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg'
               }
           ],
           lunbotuList: [],
           // 获取商品参数等信息   
           goodsInfo: { 
               id: 1,
               title: 'vivo双4g 全网通 金属质感沙滩金',
               add_time: '2017-12-12T09:32:44.000Z',
               goods_no: 'SD3837383929',
               stoke_quantity: 234,
               market_price: 2199,
               sell_price: 2099
           },
           ballFlag: false , //小球是否显示
           clickNumber: 1 //获取要加购的数量，默认1

        };
    },
    created(){
        this.getLunbotu(); 
        this.getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result =>{
                if(result.body.status === 0 ){
                    result.body.message.forEach(item => {
                        item.img = item.src;
                    });
                    this.lunbotuList = result.body.message;
                }
            });
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.goodsInfo = result.body.message[0];
                }
            });
        },
        goGoodsDesc(id){
            this.$router.push({name: 'goodsDesc', params: {id: id} });
        },
        goComments(id){
            this.$router.push({name: 'goodsComments', params: {id} });
        },
        addShop(){ //点击小球隐藏显示
            this.ballFlag = !this.ballFlag;
            // 拼接出一个要保存到store中car数组里的 商品信息对象
            var goodsinfo ={
                id: this.id,
                count: this.clickNumber,
                price: this.goodsInfo.sell_price,
                selected: true 
            };
            //调用store中的mutations来将商品加入购物车
            this.$store.commit('addShopCar', goodsinfo);
        },
        beforeEnter(el){ //小球进入前动画
            el.style.transform = 'translate(0,0)';
        },
        enter(el,done){ //小球进入时的动画
            el.offsetWidth;
            // 获取小球的位置坐标
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取购物车徽标的位置坐标
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            // 横向距离
            const xDistance = badgePosition.left - ballPosition.left;
            // 纵向距离
            const yDistance = badgePosition.top - ballPosition.top;
            //es6模板语法
            el.style.transform = `translate(${xDistance}px,${yDistance}px)`;
            el.style.transition = 'all 0.5s cubic-bezier(.4, -0.3, 1, .68)';
            done();
        },
        afterEnter(el){ //小球进入后的动画
            this.ballFlag = !this.ballFlag;
        },
        getClickNumber(count){ //获取购买加购的数量
            this.clickNumber = count;
            // console.log(this.clickNumber);
        }
    },
    components:{
        swiper,
        numberBox
    }
}
</script>

<style lang="scss" scoped>
   .goodsinfo-container{
       background-color: #eee;
       overflow: hidden;
       .price{
           .sell-price{
               color: red;
               font-weight: bold;
           }
       }
       
       .mui-card-footer{
           display: block;
           button{
               margin: 10px 0;
           }
       }
       .ball{
           width: 15px;
           height: 15px;
           border-radius: 50%;
           background-color: red;
           position: absolute;
           top: 376px;
           left: 186px;
           z-index: 99;

       }
   }
</style>


