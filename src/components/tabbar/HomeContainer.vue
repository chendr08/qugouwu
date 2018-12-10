<template>
  <div>
    <!--轮播图区域  -->
    <!-- <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../../images/banner1.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../images/banner2.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../images/banner3.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../images/banner4.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../images/banner5.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../images/banner6.png" alt=""></mt-swipe-item>
    </mt-swipe> -->

    <!-- 以下用法支持API获取数据渲染的方式 -->
    <!-- <mt-swipe :auto="4000"> -->
        <!-- 在组建中，当使用v-for循环数据时，一定要使用:key -->
        <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.img"> -->
            <!-- 别忘了src要绑定属性: -->
            <!-- <img :src="item.img" alt=""> 
        </mt-swipe-item>
    </mt-swipe> -->
     <!-- 1.3引用子组件 -->
    <swiper :lunbotuList="lunbotuLists" :isFull="true"> </swiper>
    <!--/轮播图区域  -->

    <!-- 九宫格改六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newsList">
		        <img src="../../images/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photoList">
		        <img src="../../images/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodsList">
		        <img src="../../images/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu4.png" alt="">
		        <div class="mui-media-body">留言反馈</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu5.png" alt="">
		        <div class="mui-media-body">视频专区</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu6.png" alt="">
		        <div class="mui-media-body">联系我们</div></a>
        </li>
	</ul>
    <!-- /九宫格改六宫格 -->
 </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    // 1.1导入子组件
    import swiper from '../subcomponents/Swiper.vue'
    export default {
        data() {
            return {
                //保存轮播图数据
                lunbotuLists: [
                    {
                        img: 'http://m.360buyimg.com/mobilecms/jfs/t26062/36/2674624754/140210/109d5f8b/5beb87e0Nc4438c06.jpg!cr_1125x549_0_72'
                    },
                    {
                        img: 'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/18838/15/167/101585/5c07ae3bEcaf59713/d436e041420ce1b9.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                    },
                    {
                        img: 'http://m.360buyimg.com/mobilecms/s750x366_jfs/t27364/338/1734937885/213196/a8d2ac22/5beae815Nc7f07d59.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                    }
                ] ,
                lunbotuList: []
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu(){
                //获取轮播图的数据,配置全局根路径后api/getlunbo前面不能带/
                this.$http.get('api/getlunbo').then(result => {
                    if(result.body.status === 0) { //获取成功
                        this.lunbotuList = this.body.message;
                        Toast('获取轮播图数据成功测试');
                    } else { //获取失败
                        Toast('获取轮播图数据失败');
                    }
                });
            }
        },
        components: {
            //1.2 注册子组件
            swiper
        }
    }

</script>

<style lang="scss" scoped>
   
    .mui-grid-view.mui-grid-9 {
        border: none;
        background-color: #fff;
        img {
            width: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
