<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表日期：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1" ></vue-preview> 
        <!-- 方式二 <div class="thums">
            <img class="preview-img" v-for="(item,index) in list" :key="item.src" :src="item.src"
             height="100" @click="$preview.open(index,list)">
        </div> -->
        

        <!-- 文字内容区域 -->
        <!-- <div class="desc-container" v-html=" photoinfo.content"> -->
        <div class="desc-container" >
            <p>{{photoinfo.content}}</p>
        </div>
        <!-- 评论组件区域 -->
        <!-- 1.3 引入评论子组件 并绑定id项子组件传值-->
        <comment-container :id="id"> </comment-container>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
// 1.1导入子组件
import Comment from '../subcomponents/Common.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,//从路由中获取到的图片id
            photoinfo: { //图片详情
                id: 1,
                title: '一篇有深度的装修文章',
                click: 343,
                add_time: '2015-04-18T04:59:13.000Z',
                content:'想写一篇有深度的装修文章,但是，软文功底不行哦！不过，还是想扒拉一下装修的事。其实，装修无非两种境况。一种是费用占主导地位，另一种是效果品质占主导地位。你说还有既要品质又要控制费用的“理想型”，那你只能去装家兵。'
                          
            }, 
             list: [ //缩略图信息，方式二数据
                 {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    w: 600,
                    h: 400
                }
             ],
            
            slide1: [ //虚构的缩略图数据 方式一数据
                {
                  src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                  msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                  alt: 'picture1',
                  title: 'Image Caption 1',
                  w: 600,
                  h: 400
                },
                {
                  src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                  msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                  alt: 'picture2',
                  title: 'Image Caption 2',
                  w: 600,
                  h: 400
                }
            ]
        }
    },
    created(){
        this.getPhotoInfo( );
        this.getThumbs();
    },
    methods:{       
         getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0];
                } else {
                    Toast('获取图片详情数据失败');
                }
            })
        },
        getThumbs(){ //获取缩略图数据
            this.$http.get('api/getthumimages/'+this.id).then(result =>{
                if(result.body.status === 0){
                    //循环没意向图片数据，为每一项添加宽和高
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    //把完整的数据保存到list中
                    this.list = result.body.message;
                }
            })
        }

    },
    components:{ // 1.2 注册评论子组件
        'comment-container': Comment
    }
}
</script>

<style lang="scss" scoped>
   .photoinfo-container{
       padding: 4px;
       h3{
           font-size: 15px;
           color: #26a2ff;
           text-align: center;
           margin: 15px 0;
       }
       .subtitle{
           font-size: 13px;
           display: flex;
           justify-content: space-between;
       }
       .desc-container{
           p{
               color: #333;
               font-size: 13px;
               line-height: 30px;
           }
       }

       .thums{
           img{
               margin: 10px;
               box-shadow: 0 0 8px #999;
           }
       }
   }
</style>
