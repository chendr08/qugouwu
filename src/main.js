// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由,括号里不加引号
Vue.use(VueRouter)
//2.1导入vue-resource,Vue-Resource主要用于发送ajax请求，Vue从后台获取数据的插件
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
        },
        updateShopNumber(state,goodsinfo){ //更新购物车中的商品数量
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })
            //当修改完商品的数量，把最新的购物车数据保存到本地存储中,存储时转成字符串格式
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeGoods(state,id){ //根据id删除store中对应的商品信息
            state.car.some((item,i) =>{
                if(item.id == id){
                    state.car.splice(i , 1);
                    return true;
                } 
            })
            //当删除了对应id的商品信息后，把最新的购物车数据保存到本地存储中,存储时转成字符串格式
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateSelected(state,goodsinfo){
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.selected = goodsinfo.selected;
                    return true;
                }
            })
            //当更新了对应id的商品信息后，把最新的购物车数据保存到本地存储中,存储时转成字符串格式
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
        },
        getGoodsCount(state){ //获取购物车中商品的数量
            var o = { };
            state.car.forEach(item =>{
                // {1: 23,2:322,3:228,4:333} id值对应的数量
                o[item.id] = item.count;
            })
            console.log(o);
            return o;
        },
        getGoodsSelected(state){ //获取是否选中的值,返回对象格式{id:boolean}
            var o = { };
            state.car.forEach(item =>{
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){ //获取结算的总件数和总金额
            var o = {
                count: 0,
                amount: 0
            };
            state.car.forEach(item =>{
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price * item.count;
                }
            })
            return o;
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
import { Header,Swipe,SwipeItem,Button,Lazyload,Switch } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch);
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
    store //注册store数据共享仓库
})