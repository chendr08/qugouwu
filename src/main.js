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
//3.1导入vuex
import Vuex from 'vuex'
//3.2注册安装Vuex
Vue.use(Vuex)
//3.3 new一个vuex示例
///每次进入网站，肯定会先调用main.js,在调用的时候，先从本地存储中把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]') ;
var store = new Vuex.Store({
    state:{ //通过this.$store.state.** 获取值
        car: car //购物车中的商品的数据，存储一些商品的对象
    },
    mutations:{ //通过this.$store.commit('方法名','按需传递的唯一的一个参数')
        addShopCar(state,goodsinfo){ //添加购物车
            //假设在购物车中没有找到这个商品
            var flag = false;
            //循环遍历state中car数组的每一项
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    //如果购物车中存在该商品了，则只需此商品的数量加上新加购的数量
                    item.count += parseInt(goodsinfo.count);
                    //找到了状态改为true
                    flag = true;
                    //找到了就停止循环
                    return true;
                }
            })
            // 如果依然没找到相同的商品信息，则直接把新加购的商品信息添加到car数组中
            if(!flag){
                state.car.push(goodsinfo);
            }
            //当更新car之后，把car数组存储到本地的localStorage中,存储时转成字符串格式
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: { //通过this.$store.getters.** 获取经过包装的state中的值，相当于computed计算属性
        getAllCount(state){ //获取购物车中选中的总的商品数量
            var c = 0; 
            state.car.forEach(item => {
                //购物车中的商品数量之和
                c += item.count;
            })
            return c;
        }
    }
});

//导入moment格式化时间的插件 npm i moment -S
import moment from 'moment'
//定义全局的时间格式化过滤器
Vue.filter('dateFormat', function(datastr, pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(datastr).format(pattern);
})

//设置全局的请求根路径
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-UI中的组件
import { Header,Swipe,SwipeItem,Button,Lazyload  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css' //前面不加./

//导入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//1.3导入自己的router.js模块
import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //1.4 注册路由
    store
})