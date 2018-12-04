// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由,括号里不加引号
Vue.use(VueRouter)
//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//导入moment格式化时间的插件 npm i moment -S
import moment from 'moment'
//定义全局的时间格式化过滤器
Vue.filter('dateFormat', function(datastr, pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(datastr).format(pattern);
})

//设置全局的请求根路径
Vue.http.options.root = 'http://vue.studyit.io';

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-UI中的组件
import { Header,Swipe,SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


//1.3导入自己的router.js模块
import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //1.4 注册路由
})