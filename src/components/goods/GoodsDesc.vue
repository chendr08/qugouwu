<template>
    <div class="goods-desc">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //商品详情数据
            info: {
                title: '华为(HUAWEI)荣耀6Plus 16双4G版',
                content: ' <p>HUAWEI nova 3 旗舰新品，2400万海报级自拍，高清四摄 AI实力派。3D人像动态光效，暗光拍照也清晰。 腾讯数码讯(水蓝)最近炒得火热的华为nova 4由于采用了挖孔设计的极点全面屏设计而备受关注,同时在相关规格方面现在也有最新消息浮出水面</p>'+
                           '<div align="center"><img style=" width:100% " src="https://m.360buyimg.com/babel/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg!q70.jpg"></div>'+
                           '<div align="center"><img style=" width:100% " src=" https://m.360buyimg.com/babel/jfs/t23359/128/2369309375/207652/6973579a/5b7d05feN6f190d9a.jpg!q70.jpg"></div>'                          
            }
        };
    },
    created(){
        this.getGoodsInfo();
    },
    methods:{
        getGoodsInfo(){
            this.$http.get('api/goods/'+this.$route.params.id).then(result =>{
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                }
            });
        }
    }
}
</script>

<style lang="scss" >
    .goods-desc{
        padding:5px;
        h3{ 
            text-align: center;
            margin: 15px 0;
            font-size: 16px;
            color: #226aff;
        }
        img{
            width: 100%;
        }
    }
</style>

