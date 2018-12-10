<template>
  <div class="app-container">
    <!-- header部分 -->
    <mt-header fixed title="趣购物"></mt-header>

    <!-- router-view中心内容区域 -->
		<transition>
    <router-view></router-view>
		</transition>
    <!-- tabBar底部切换 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-cdr-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-cdr-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-cdr-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-cdr-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    
  </div>
</template>

<script>

</script>


<style lang="scss"  scoped>
   .app-container {
     padding-top: 40px;
		 padding-bottom: 50px;
		 overflow: hidden;//1.1解决动画出现滚动条的问题
   }
	// 路由切换动画
	 .v-enter { //1.2分开写，解决动画进出方向顺序的问题
		 opacity: 0;
		 transform: translateX(100%);//移动设备的宽度等于设备宽度
	 }
	 .v-leave-to {
		 opacity: 0;
		 transform: translateX(-100%);//移动设备的宽度等于设备宽度
		 position: absolute;//1.3解决动画上下飘移的问题
	 }
	 .v-enter-active,
	 .v-leave-active {
		  transition: all 0.5s ease;
	 }
	//  解决滑动条不能切换的问题
	.mui-bar-tab .mui-tab-cdr-item.mui-active {
    color: #007aff;
  }
	.mui-bar-tab .mui-tab-cdr-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-cdr-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-cdr-item .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mint-header{
	z-index: 100;
}
</style>
