<template>
    <div>
        
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head1.png">
						<div class="mui-media-body">
							<h1>生活</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head2.jpeg">
						<div class="mui-media-body">
							<h1>学习</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head3.jpg">
						<div class="mui-media-body">
							<h1>业余爱好</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head1.png">
						<div class="mui-media-body">
							<h1>医疗</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head2.jpeg">
						<div class="mui-media-body">
							<h1>美食</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head3.jpg">
						<div class="mui-media-body">
							<h1>养生</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head1.png">
						<div class="mui-media-body">
							<h1>趣事</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head2.jpeg">
						<div class="mui-media-body">
							<h1>问卷调查</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head1.png">
						<div class="mui-media-body">
							<h1>游戏</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsInfo/1">
						<img class="mui-media-object mui-pull-left" src="../../images/head2.jpeg">
						<div class="mui-media-body">
							<h1>闲物分享</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2017-01-01 12:19:30</span>
                                <span>评论次数：56次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <!-- 以下为请求api中url路径获取数据时的格式 -->
                <!-- <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id" >
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url ">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dateFormat }}</span>
                                <span>评论次数：{{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li> -->

			</ul>

    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            newsList: [] //保存新闻列表数据
        };
    },
    created() {
        this.getNewsList(); //调用获取数据的方法
    },
    methods: {
        getNewsList(){ //获取轮播图的数据,配置全局根路径后api/getlunbo前面不能带/
            this.$http.get('api/getnewslist').then(result => {
                if(result.body.status === 0){ //成功
                    this.newsList = result.body.message;
                    Toast('获取新数据成功--测试');
                } else { //失败
                    Toast('获取新闻数据失败');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>


