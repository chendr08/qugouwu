import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarCtainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photoes/PhotoList.vue'
import PhotoInfo from './components/photoes/PhotoInfo.vue' 
import GoodsList from './components/goods/GoodsList.vue' 
import GoodsInfo from './components/goods/GoodsInfo.vue' 
import GoodsDesc from './components/goods/GoodsDesc.vue' 
import GoodsComments from './components/goods/GoodsComments.vue' 


// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则的
    {path: '/', redirect: '/home'},//路由重定向
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarCtainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newsList', component: NewsList},
    {path: '/home/newsInfo/:id', component: NewsInfo},
    {path: '/home/photoList', component: PhotoList},
    {path: '/home/photoInfo/:id', component: PhotoInfo},
    {path: '/home/goodsList', component: GoodsList},
    {path: '/home/goodsInfo/:id', component: GoodsInfo, name: 'goodsInfo'},
    {path: '/home/goodsDesc/:id', component: GoodsDesc, name: 'goodsDesc'},
    {path: '/home/goodsComments/:id', component: GoodsComments, name: 'goodsComments'}

  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮类router-link-active
})

// 把路由对象暴露出去
export default router