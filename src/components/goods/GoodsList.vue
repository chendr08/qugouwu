<template>
    <div class="goods-list">
        <!-- 在网页中，有两种跳转方式 -->
        <!-- 方式一：使用a标签的形式，叫做标签跳转 -->
        <!-- 方式二：使用window.location.href的形式，叫做编程式导航 -->
        <div class="goods-item" v-for="item in goodsLists" :key="item.id" @click="goGoodsInfo(item.id)">
            <img :src="item.img_url" alt="">
            <div class="title">
                {{item.title}}
            </div>
            <div class="subtitle">
                <p class="price">
                    <span class="newprice">￥{{item.sell_price}}</span>  
                    <span class="oldprice">￥{{item.market_price}}</span>
                </p>
                <p class="desc">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMoreMy">获取更多</mt-button>
        <!--api获取格式 <mt-button type="danger" size="large" @click="getMore">获取更多</mt-button> -->

        <!-- <div class="goods-item">
            <img src="../../images/goods1.jpg" alt="">
            <div class="title">
                vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机
            </div>
            <div class="subtitle">
                <p class="price">
                    <span class="newprice">￥2199</span>  
                    <span class="oldprice">￥2599</span>
                </p>
                <p class="desc">
                    <span>热卖中</span>
                    <span>剩309件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/goods2.jpg" alt="">
            <div class="title">
                OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝
            </div>
            <div class="subtitle">
                <p class="price">
                    <span class="newprice">￥2199</span>  
                    <span class="oldprice">￥2599</span>
                </p>
                <p class="desc">
                    <span>热卖中</span>
                    <span>剩50件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/goods3.jpg" alt="">
            <div class="title">
                Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待
            </div>
            <div class="subtitle">
                <p class="price">
                    <span class="newprice">￥2199</span>  
                    <span class="oldprice">￥2599</span>
                </p>
                <p class="desc">
                    <span>热卖中</span>
                    <span>剩43件</span>
                </p>
            </div>
        </div> -->
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageindex: 1, //获取的页数
            goodsLists: [ //构造的假的商品信息数据
                {
                    id: 1,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 234,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg',
                    sell_price: 2399,
                    market_price: 2599,
                    stock_quantity: 344
                },
                {
                    id: 2,
                    title: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    click: 2134,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg',
                    sell_price: 5099,
                    market_price: 5599,
                    stock_quantity: 73
                },
                {
                    id: 3,
                    title: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    click: 24,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t1/5479/8/3546/70556/5b997c0cE40f64978/6540f1c2a6090257.jpg!q70.jpg',
                    sell_price: 1199,
                    market_price: 1499,
                    stock_quantity: 14
                },
                {
                    id: 4,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 114,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg',
                    sell_price: 2799,
                    market_price: 2999,
                    stock_quantity: 1021
                },
                {
                    id: 5,
                    title: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    click: 198,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t23359/128/2369309375/207652/6973579a/5b7d05feN6f190d9a.jpg!q70.jpg',
                    sell_price: 899,
                    market_price: 1099,
                    stock_quantity: 78
                },
                {
                    id: 6,
                    title: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    click: 90,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t22558/89/2343666456/198377/2e0dea9e/5b7b8cd1Nb4f33692.jpg!q70.jpg',
                    sell_price: 3399,
                    market_price: 3499,
                    stock_quantity: 1099
                },
                {
                    id: 7,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 878,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t1/1867/31/11716/401006/5bd072f8E6db292ab/f3610e2e816ade0f.jpg!q70.jpg',
                    sell_price: 1599,
                    market_price: 1799,
                    stock_quantity: 122
                },
                {
                    id: 8,
                    title: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏',
                    click: 811,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t25468/90/1862724202/251453/18c13d7/5bbead1dN46606f08.jpg!q70.jpg',
                    sell_price: 1099,
                    market_price: 1399,
                    stock_quantity: 99
                },
                {
                    id: 9,
                    title: 'Apple iPhone XR (A2108) 64GB 白色',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'Apple iPhone XR (A2108) 64GB 白色',
                    click: 123,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t1/5479/8/3546/70556/5b997c0cE40f64978/6540f1c2a6090257.jpg!q70.jpg',
                    sell_price: 5399,
                    market_price: 6599,
                    stock_quantity: 344
                }
            ], 
            moreFlag: true,
            goodsMoreMy: [ //构造获取更多商品信息的假数据
                {
                    id: 10,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 234,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg',
                    sell_price: 2399,
                    market_price: 2599,
                    stock_quantity: 344
                },
                {
                    id: 11,
                    title: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    click: 2134,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg',
                    sell_price: 5099,
                    market_price: 5599,
                    stock_quantity: 73
                },
                {
                    id: 12,
                    title: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    click: 24,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t1/5479/8/3546/70556/5b997c0cE40f64978/6540f1c2a6090257.jpg!q70.jpg',
                    sell_price: 1199,
                    market_price: 1499,
                    stock_quantity: 14
                },
                {
                    id: 13,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 114,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg',
                    sell_price: 2799,
                    market_price: 2999,
                    stock_quantity: 1021
                },
                {
                    id: 14,
                    title: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'OPPO 【3期免息】K1 首款千元屏下指纹解锁手机 6.4英寸水滴屏 梵星蓝',
                    click: 198,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t23359/128/2369309375/207652/6973579a/5b7d05feN6f190d9a.jpg!q70.jpg',
                    sell_price: 899,
                    market_price: 1099,
                    stock_quantity: 78
                },
                {
                    id: 15,
                    title: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待',
                    click: 90,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t22558/89/2343666456/198377/2e0dea9e/5b7b8cd1Nb4f33692.jpg!q70.jpg',
                    sell_price: 3399,
                    market_price: 3499,
                    stock_quantity: 1099
                },
                {
                    id: 16,
                    title: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    add_time: '2015-04-19T16:51:03.000Z',
                    zhaiyao: 'vivo X23全息幻彩版 6GB+128GB 北极晨曦 水滴屏全面屏 游戏手机 移动联通电信全网通4G手机',
                    click: 878,
                    img_url: 'https://m.360buyimg.com/babel/jfs/t1/1867/31/11716/401006/5bd072f8E6db292ab/f3610e2e816ade0f.jpg!q70.jpg',
                    sell_price: 1599,
                    market_price: 1799,
                    stock_quantity: 122
                }
            ], 
            goodsList: [] //存储商品信息数据api格式
        }
    },
    created(){
            this.getGoodsList();
            this.getMore();
        },
        methods:{
            getGoodsList(){ //获取商品列表信息
                this.$http.get('api/getgoods?pageindex='+pageindex).then(result =>{
                    if(result.body.status === 0){
                        this.goodsList = this.goodsList.concat(result.body.message);
                    }
                })
            },
            getMore(){ //获取下一页的商品列表数据
                this.pageindex++;
                this.getGoodsList();
            },
            getMoreMy(){
                if(this.moreFlag === true){
                this.goodsLists=this.goodsLists.concat(this.goodsMoreMy);
                this.moreFlag = false; //默认获取更多只能加载一次
                }else{
                    Toast('小主，已经是最后一页了');
                }
                
            },
            goGoodsInfo(id){ //跳转到商品信息页面
                //使用js的形式进行路由导航
                // 注意：一定要区分this.$route和this.$router这两个对象
                // this.$route是路由【参数对象】，所有路由中的参数：params、query都属于他；
                // this.$router是路由【导航对象】，用它可以方便地使用js代码，实现路由的前进、后退，跳转到新的URL地址。
                
                // 1.最简单的
                // this.$router.push('/home/goodsInfo/'+id);
                // 2.传递对象
                // this.$router.push({path: '/home/goodsInfo/'+id});
                // 3.传递命名的路由
                this.$router.push({name: 'goodsInfo', params: {id:id} });
            }

        }
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 3px #ccc;
            margin-bottom: 3px;
            padding: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 283px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .subtitle{
                background-color: #ddd;
                .price{
                    margin: 0;
                    padding: 5px;
                    .newprice{
                        color: red;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .oldprice{
                        font-size: 13px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .desc{
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
            }
        }
    }
</style>
