import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarCtainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则的
    {path: '/', redirect: '/home'},//路由重定向
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarCtainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newsList', component: NewsList},
    {path: '/home/newsInfo/:id', component: NewsInfo}
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮类router-link-active
})

// 把路由对象暴露出去
export default router