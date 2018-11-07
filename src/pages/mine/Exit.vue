<template>
    <div id="exit">
         <div class="top">
            <span class="backBtn" @click="goBackAction"><i class="iconfont">&#xe60a;</i></span>
            <h3 class="title">账户信息</h3>
        </div>

        <div class="main">
            <div class="main-head">
                <p class="main-head-icon">头像</p> 
                <p class="main-head-username">用户名：{{$store.state.userInfo.name}}</p>
            </div>
            <div class="main-phone">
                <p class="main-phone-title">账号绑定</p>
                <p class="main-phone-content">
                    手机<span></span>
                </p>
            </div>
            <div class="main-password">
                <p class="main-password-title">安全设置</p>
                <p class="main-password-content">登录密码</p>
            </div>
            <div class="main-exit" @click="exitAction">
                <button class="exitBtn" >安全退出</button>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBackAction(){
            this.$router.back();
        },
        exitAction(){
            this.$store.state.userInfo.name="";
            this.$store.state.userInfo.id = "";
            this.$router.back();
        }
    },
    created(){
        // console.log(this.$route.query.name)
    }
    
}
</script>

<style scoped>
#exit{
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
}
.top{
    color: #fff;
}
.backBtn{
   position: absolute;
    width:44px;
    height: 44px;
    line-height: 44px;
    text-align: center
}
.title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.main-head{
    padding: 0 10px;
    background: #fff;
}
.main-head-icon{
    width:100%;
    height: 80px;
    line-height: 80px;
    
}
.main-head-username{
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
}
.main-phone-title,.main-password-title{
    padding: 0 10px;
    margin-top:10px; 
    height: 20px;
    font-size: 12px;
}
.main-phone-content,.main-password-content{
    padding: 0 10px;
    background: #fff;
    height: 50px;
    line-height: 50px;
}
.main-exit{
    margin-top: 20px;
    text-align: center;
}
.exitBtn{
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    color:#fff;
    background: #ff5339;
    font-size: 16px;
}



</style>
