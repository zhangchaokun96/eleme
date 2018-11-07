<template>
    <div id="login">
        <header class="header-box">
            <h1 class="title login-vol"><i class="iconfont icon">&#xe74b;</i> 饿了么</h1>
            <p>Everything 30'</p>
        </header>
        <div class="login">
            <p>
                <input type="text" placeholder="请输入用户名" v-model="username" required>
            </p>
             <p>
                 <input type="password" placeholder="请输入密码" v-model="password" required>
            </p>
            <p class="tag">
                温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意
                <a href="#">《用户服务协议》</a>
            </p>
            <p>
                <button @click="loginAction">登录</button>
            </p>
           <p class="me">关于我们</p>

        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        loginAction(){
            this.$store.commit("userInfo/modifyIdAndName",{
                name:this.username,
                id:"55222222"
            });
            this.$router.back();
            this.username = "";
            this.password = "";
        }
    }
}
</script>

<style scoped>
#login{
    background: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
}
.header-box{
    width:300px;
    height: 170px;
    margin: 0 auto;
    text-align: center;
    padding-top:50px;
    color:#2395ff;
}
.login-vol{
  font-size:30px;
}
.titlebox .icon{
    font-size: 30px;
}
.login p{
    text-align: center;
     color:#999;
}
p.tag{
    font-size: 14px;
}
p.tag a{
    color:#2395ff;
}
.login input,.login button,p.tag{
    height: 50px;
    width: 300px;
    margin: 0 auto 20px;
   
   
 }
 .login input{
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    padding-left: 10px
 }
.login button{
    border-radius: 5px;
    border: none;
    outline: none;
    background: #4cd96f;
    font-size: 16px;
    color:#fff;
}
.me{
    font-size: 12px;
}
</style>
