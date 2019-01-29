<template>
    	<!--单页面开始-->
			<!--页面主内容区开始-->
			<div class="member-container">
				<!-- <div class="mui-scroll-wrapper">
					<div class="mui-scroll"> -->
						<ul class="mui-table-view mui-table-view-chevron profile-item">
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right" href="#account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../images/head1.png">
									<div class="mui-media-body">
										小陈
										<p class='mui-ellipsis'>账号:chendr</p>
									</div>
								</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron account-item">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">账号与安全</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right">新消息通知</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right">隐私</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">通用</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron about-item">
							<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">关于趣购物 <i class="mui-pull-right update">V3.1.0</i></a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;">
								<a>退出登录</a>
							</li>
						</ul>
					<!-- </div>
				</div> -->
			</div>
			<!--页面主内容区结束-->
		
</template>

<script>

</script>

<style lang="scss" scoped>
.member-container { 
  height: 576px;
  background-color: #EFEFF4;
  .account-item {
      margin: 15px 0;
  }
  .about-item {
      margin: 15px 0;
  }
}
</style>