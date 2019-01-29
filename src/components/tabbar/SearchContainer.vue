<template>
 <div class="search-box">
    <div class="search-container">
        <input type="text" placeholder="请输入要搜索的商品" class="search-item">
        <mt-button type="primary" class="search-btn">搜索</mt-button>
        
    </div>
    <p class="search-title"><span>搜索历史</span> <span>清除</span></p>
    <ul class="mui-table-view">
            <li class="mui-table-view-cell">qqqqqqItem 1</li>
            <li class="mui-table-view-cell">Item 2</li>
           <li class="mui-table-view-cell">Item 3</li>
    </ul>
 </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.search-box{
    
    .search-container {
        text-align: center;
        padding: 10px;
        .search-item {
            border-radius: 0;
            width: 80%;
            border-color: #26A2FF;
        }
        .search-btn {
            border-radius: 0;
            position: relative;
            left: -5px;
        }
    }
    .search-title{
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
    }
}
</style>