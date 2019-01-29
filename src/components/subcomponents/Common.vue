<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg" > </textarea>
        <mt-button type="primary" size="large" @click="postCommentMy">发表评论</mt-button>
        <div class="cmt-list">
            <!-- <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    一年又一年，一日又一日
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第2楼&nbsp;&nbsp;用户：小小鸟&nbsp;&nbsp;发表时间：2012-11-12 11:09:12
                </div>
                <div class="cmt-body">
                    我是一只小小鸟，怎么飞也飞不高
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第3楼&nbsp;&nbsp;用户：行星&nbsp;&nbsp;发表时间：2013-09-12 08:12:26
                </div>
                <div class="cmt-body">
                    少壮不努力，老大徒伤悲，加油吧
                </div>
            </div> -->
            <!-- 以下为有api数据加载时的格式 -->
            <div class="cmt-item" v-for="(item, i) in comment" :key="item.add_time" >
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{item.content === undefined ? '此用户很懒，什么也没留下' : item.content }}
                </div>
            </div>
             <!-- /以下为有api数据加载时的格式 -->
        </div>
        <mt-button type="danger" size="large" plain @click="getMoreMy">加载更多</mt-button>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            comment: [ //存储获取的评论数据
                {
                    user_name: '行星小小',
                    add_time: '2017-06-12T15:13:45.000Z',
                    content: '今天天气真的好冷啊！'
                },
                 {
                    user_name: '白云朵朵',
                    add_time: '2017-02-12T15:13:45.000Z',
                    content: '还是要好好学习的，不然怎么办！'
                },
                 {
                    user_name: '流沙',
                    add_time: '2014-01-10T15:13:45.000Z',
                    content: '有人么，吃饭么大家'
                },
                 {
                    user_name: '小小哈',
                    add_time: '2017-12-12T15:13:45.000Z',
                    content: '此人很懒，什么也没留下。。。'
                },
                 {
                    user_name: '溜溜球',
                    add_time: '2017-10-10T15:13:45.000Z',
                    content: '少壮不努力，老大徒伤悲啊'
                },
                 {
                    user_name: 'goodgirl',
                    add_time: '2016-04-19T15:10:45.000Z',
                    content: '要变瘦，变美。。。'
                },
                 {
                    user_name: '黑屏了',
                    add_time: '2016-09-11T15:13:45.000Z',
                    content: '不开心了！'
                },
                 {
                    user_name: '白天',
                    add_time: '2016-04-12T15:13:45.000Z',
                    content: '白天不懂夜的黑啊，哈哈'
                },
                 {
                    user_name: '往后',
                    add_time: '2016-03-24T15:13:45.000Z',
                    content: '往后余生，我心有你'
                },
                 {
                    user_name: '美美女',
                    add_time: '2016-01-12T15:13:45.000Z',
                    content: '推荐个好用的手机呗'
                },
                 {
                    user_name: '哈哈',
                    add_time: '2015-08-12T15:13:45.000Z',
                    content: '冒个泡，大家好啊'
                }
            ] ,
            commentMore: [ //获取更多的评论数据
                {
                    user_name: '小鱼',
                    add_time: '2015-09-12T15:13:45.000Z',
                    content: 'it is very good.'
                },
                 {
                    user_name: 'liuliuliu',
                    add_time: '2015-08-16T15:13:45.000Z',
                    content: '床前明月光，疑是地上霜'
                },
                 {
                    user_name: '喵喵',
                    add_time: '2015-01-10T15:13:45.000Z',
                    content: '晚上吃啥饭'
                },
                 {
                    user_name: '欣然mml',
                    add_time: '2015-04-12T15:13:45.000Z',
                    content: '此人很懒，什么也没留下。。。'
                }
            ] ,
            //存储获取的评论数据
            comments: [ ] ,
            pageindex: 1 ,//默认获取第一页
            msg: '' //评论内容
        };
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){ //1.3在子组件中可以直接使用props属性中传过来的值了
            this.$http.get("api/getcomments/"+id+"?pageindex="+pageindex).then(result =>{
                if(result.body.status === 0){
                    //每当获取新的评论数据时，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                    this.comments = this.comments.concat(result.body.message);
                } else{
                    Toast('获取数据失败');
                }
            })
        },
        getMore(){ //获取更多评论数据
            //页数加一
            this.pageindex++;
            this.getComments();
        },
        postComment(){ //提交评论
            //校验数据
            if(this.msg.length === 0 ){
                Toast('评论内如不能为空');
            }
            this.$http.post('api/postcomment/'+this.$route.params.id, {content : this.msg.trim() })
            .then(result => {
                if(result.body.status === 0) {
                    var cmt = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    };
                    comments.unshift(cmt);
                    msg = '';
                }
            })
        },
        postCommentMy(){ //提交评论
            //校验数据
            if(this.msg.length === 0 ){
                Toast('评论内如不能为空');
            }
            var cmt = {
                user_name: '匿名用户',
                add_time: Date.now(),
                content: this.msg.trim()
            };
            this.comment.unshift(cmt);
            this.msg = '';
        },
        getMoreMy(){ //获取更多评论数据
            //页数加一
            if(this.pageindex == 1){
                this.comment = this.comment.concat(this.commentMore);
                this.pageindex = 2;
            } else{
                Toast('小主，已经是最后一页了');
            }
            
        }
    },
    props: ["id"] //1.2在子组件中通过props接收父组件传过来的值id
    
}
</script>

<style lang="scss" scoped>
.cmt-container{
    padding: 5px;
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
