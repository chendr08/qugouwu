<template>
  <div>
    <!--轮播图区域  -->
    <mt-swipe :auto="4000">
        <!-- 在组建中，当使用v-for循环数据时，一定要使用:key -->
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <!-- 别忘了src要绑定属性: -->
            <img :src="item.img" alt=""> 
        </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格改六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div></a>
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
 </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                lunbotuList: [] //保存轮播图数据
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu(){
                //获取轮播图的数据
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                    if(result.body.status == 0) { //获取成功
                        this.lunbotuList = this.body.message;
                        Toast('获取轮播图数据成功测试');
                    } else { //获取失败
                        Toast('获取轮播图数据失败');
                    }
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;//设置轮播图盒子的高
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
             &:nth-child(2) {
                background-color: blue;
            }
             &:nth-child(3) {
                background-color: yellow;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
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
