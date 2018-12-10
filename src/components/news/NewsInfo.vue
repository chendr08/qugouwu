<template>
 <div>
    
    <div class="newsInfoContainer">
         <!-- 标题部分 -->
        <h3 class="title">生活不停体味成长的酸痛</h3>
        <p class="subtitle">
            <span>发表时间：2017-01-01 12:13:50</span>
            <span>点击：698次</span>
        </p>
        <hr>
        <!-- 内容部分 -->
        <div class="content" > 
            <p>
            成长是一个由依赖到独立的过程。处在发育期会有一种痛，叫成长痛。
            医学上解释，处在这个快速生长发育期，下肢骨骼生长迅速，而其周围
            的神经、肌肉、肌腱、关节囊等生长速度相对慢一些，导致骨骼会拉扯
            周围组织，出现牵拉痛。活泼好动的年龄，运动量大，又不知疲倦，时
            间一长运动产生的酸性代谢产物堆积在组织间，也会出现肌肉酸痛。
            </p>
            <p>
            相比身体的成长内心精神的成长则要慢很多。我们在得到和失去之间被拉
            扯，动不动就触痛神经。
            </p>
            <p>
            有人强忍疼痛，有人笑，有人哭泣，有人痛叫。
            渐渐我们在失利，失态，失恋中长大，就好比在电影《前任三》，男主
            最终顿悟：“紫霞离开至尊宝后，至尊宝才能真正成长为孙悟空！我的使
            命就是陪伴，她的使命就是让我成长。成长不一定会得到什么，一定会失
            去什么！”男主的领悟里有几分超脱，还有几分无奈。
            </p>
        </div>
        <!-- 评论部分 1.1 在父组件进行属性绑定要传的参数值--> 
        <comment-box :id="newsInfo.id"></comment-box> 
    </div>

    <!-- 以下是由api的方式 -->
    <!-- <div class="newsInfoContainer">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content"> </div>
        
        <comment-box :id="newsInfo.id"></comment-box> 
    </div> -->
 </div>
</template>

<script>
import { Toast } from 'mint-ui'
//1.1导入评论子组件
import Common from '../subcomponents/Common.vue'
export default {
    data() {
        return{
            id: this.$route.params.id,  //将URL地址中传递过来的id值，挂载到data上
            newsInfo: { } //根据id返回的数组中只有一个对象即第0项，并且是对象也不需要遍历，因此不必再定义数组了
        };  
    },
    created() {
             this.getNewsInfo();
        },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.newsInfo = result.body.message[0]; //根据id返回的数组中只有一个对象即第0项
                } else {
                    Toast('获取数据失败');
                }
            })
        }
    },
    components:{
        'comment-box': Common //1.2注册评论子组件
    }
}
</script>



<style lang="scss" > 
//由于图片展示有问题，在这里需要去掉scoped,
//因为以下样式都在一个类中包裹是唯一的，所以此时去掉scoped不会产生全局污染
.newsInfoContainer{  
    padding: 4px;
    .title{
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{ 
        font-size: 13px;
        color: #22a6ff;
        display: flex;
        justify-content: space-between;
    }
    .content{ 
        p{
            font-size: 14px;
            text-indent: 2em;
            line-height: 25px;
        }
    }
}
</style>

