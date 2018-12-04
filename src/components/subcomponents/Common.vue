<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large" >发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
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
            </div>
            <!-- 以下为有api数据加载时的格式 -->
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time" >
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{ item.add_time }}
                </div>
                <div class="cmt-body">
                    {{item.content === undefined ? '此用户很懒，什么也没留下' : item.content }}
                </div>
            </div>
             <!-- /以下为有api数据加载时的格式 -->
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            comments: [] ,//存储获取的评论数据
            pageindex: 1 //默认获取第一页
        };
    },
    created(){
        getComments();
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
        }
    },
    props: ["id"] //1.2在子组件中通过props接收父组件传过来的值id
    
}
</script>

<style lang="scss" scoped>
.cmt-container{
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
