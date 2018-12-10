<template>
    <div>
        <!-- 顶部分类导航区域 -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
                        <!-- 以下为api请求数据的格式： 进入页面默认id为0的分类高亮,@tap只有mui中有这个事件-->
                       <!-- <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" 
                                v-for="item in cates" :key="item.id" @tap="getCateListById(item.id)" >
							{{item.title}}
						</a> -->
					</div>
				</div>
		</div>
        <!-- 图片列表区域 -->
        <ul class="photoList">
            <!-- 请求Api格式 -->
            <router-link v-for="item in list" :key="item.id"  :to="'/home/photoInfo/'+item.id" tag="li">
                 <img src="../../images/banner3.png">
                 <!-- <img v-lazy="item.img_url"> -->
                 <div class="info">
                     <div class="info-title">
                         {{ item.title }}
                     </div>
                    <div class="info-body">
                        {{ item.zhaiyao }}
                    </div>
                 </div>
            </router-link>
        </ul>    
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui'
//1.1 导入mui组件
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return{
            cates: [], //获取顶部全部的图片分类数据
            list: [
                {
                   id:1,
                   title: '家具风格要和个人爱好相匹配',
                   img_url: '../../images/banner6.png',
                   zhaiyao: '具有欧式风格的居家环境，给你带来不一样的感觉和体验，让人仿佛置身奇景，心情极好。'
                
                },
                {
                   id:2,
                   title: '家具风格要和个人爱好相匹配',
                   img_url: '../../images/banner5.png',
                   zhaiyao: '具有欧式风格的居家环境，给你带来不一样的感觉和体验，让人仿佛置身奇景，心情极好。'
                
                },
                {
                   id:3,
                   title: '家具风格要和个人爱好相匹配',
                   img_url: '../../images/banner4.png',
                   zhaiyao: '具有欧式风格的居家环境，给你带来不一样的感觉和体验，让人仿佛置身奇景，心情极好。'
                
                },
                {
                   id:4,
                   title: '家具风格要和个人爱好相匹配',
                   img_url: '../../images/banner4.png',
                   zhaiyao: '具有欧式风格的居家环境，给你带来不一样的感觉和体验，让人仿佛置身奇景，心情极好。'
                
                },
                {
                   id:5,
                   title: '家具风格要和个人爱好相匹配',
                   img_url: '../../images/banner4.png',
                   zhaiyao: '具有欧式风格的居家环境，给你带来不一样的感觉和体验，让人仿佛置身奇景，心情极好。'
                
                }
            ]//图片列表数据
           
        };
    },
    created(){
        this.getAllCatagory();
        this.getCateListById(0); //默认请求加载全部的图片列表
    },
    mounted(){ //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
        //1.2 初始化scroll组件
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllCatagory(){ //获取图片分类数据
            this.$http.get('api/getimgcategory').then(result => {
                if(rusult.body.status === 0){ 
                    //使用 unshift 方法手动添加对象
                    result.body.message.unshift({title: '全部', id: 0});
                    cates = result.body.message;
                }else{
                    Toast('获取数据失败');
                }
            })
        },
        getCateListById(cateid){
            this.$http.get('api/getimages/'+cateid).then(result => {
                if(result.body.status === 0) {
                    this.list = result.body.message;
                }else{
                    Toast('获取数据失败');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
   *{ //1.3 增加滑动的流畅度，去除警告
       touch-action: pan-y;
   }
   
    .photoList{
        list-style: none;
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li{ 
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 10px #999;
            position: relative;
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            img{
                height: 300px;
                margin: auto;
                width: 100%;
                vertical-align: middle;//去除图片3像素的差距
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0 ,0 ,0 ,.3);
                max-height: 84px; //设置最大高度
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }
</style>
