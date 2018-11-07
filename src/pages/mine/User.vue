<template>
  <div class="userall">
    <div class="header">
      <div class="iconfont icon-leftarrow header-left"></div>
      <div class="header-right" @click="goBackAction">我的</div>
    </div>

    <router-link to="/exit">
      <div class="login">
        <div class="loginbox">
          <div class="login-img">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="/>
          </div>
          <div class="login-deng">
            <p>{{username}}</p>
            <p><i class="iconfont icon-shouji"></i>{{mark}}</p>
          </div>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </router-link>

    <div class="login-center">
      <div class="logincenbox">
        <a href="/#">
          <span class="iconfont icon-fl-renminbi"></span>
          <span>钱包</span>
        </a>
        <a href="/#">
          <span class="iconfont icon-hongbao"></span>
          <span>红包</span>
        </a>
        <a href="/#">
          <span class="iconfont icon-jinbi"></span>
          <span>金币</span>
        </a>
      </div>
    </div>
    <div class="login-bottom">
      <div class="zhidi">
        <a href="#">
          <span class="iconfont icon-dizhi"></span>
          <span>我的地址</span>
          <span class="iconfont icon-youjiantou"></span>
        </a>
      </div>
      <div class="shangcheng">
        <a href="#">
          <span class="iconfont icon-gaiicon-"></span>
          <span>金币商城</span>
          <span class="iconfont icon-youjiantou"></span>
        </a>
        <a href="#">
          <span class="iconfont icon-libao"></span>
          <span>分享拿10元现金</span>
          <span class="iconfont icon-youjiantou"></span>
        </a>
      </div>
      <div class="kefu">
        <a href="#">
          <span class="iconfont icon-kefu"></span>
          <span>我的客服</span>
          <span class="iconfont icon-youjiantou"></span>
        </a>
        <a href="#">
          <span class="iconfont icon-changyonglogo40"></span>
          <span>下载饿了么app</span>
          <span class="iconfont icon-youjiantou"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        username:"登录/注册",
        mark:"登录后享受更多特权"
    }
  },
  methods:{
      goBackAction(){
          this.$router.push("/home");
      }
  },
  activated(){
    if(this.$store.state.userInfo.name){
        this.username = this.$store.state.userInfo.name;
        this.mark = this.$store.state.userInfo.id
    }else{
        this.username = "登录/注册";
        this.mark = "登录后享受更多特权";
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.userall{
  @include background-color(#eee);
  @include rect(100%,6.67rem);
  .header{
    @include rect(100%,.44rem);
    background-image:linear-gradient(90deg,#0af,#0085ff);
    @include flexbox();
    .header-left{
      @include rect(.44rem,.44rem);
      @include text-color(#fff);
      @include font-size(.2rem);
      @include text-align(center);
      @include line-height(.44rem);
    }
    .header-right{
      @include rect(80%,100%);
      @include text-align(center);
      @include line-height(.44rem);
      @include font-weight(700);
      @include font-size(.2rem);
      @include text-color(#fff);
    }
  }
  .login{
    @include rect(100%,1.1rem);
    background-image:linear-gradient(90deg,#0af,#0085ff);
    @include flexbox();
    @include justify-content(center);
    @include align-items(center);
    .loginbox{
      @include rect(92%,55%);
      @include flexbox()
      @include align-items(center);
      .login-img{
        @include rect(.6rem,.6rem);
        img{
          @include rect(.6rem,.6rem);
          border-radius:50%;
        }
      }
      .login-deng{
        @include rect(auto,100%);
        @include flex();
        margin-left:.28rem;
        p{
          @include text-color(#fff);
          &:nth-child(1){
            @include rect(100%,.25rem);
            @include margin-bottom(.08rem);
            @include font-weight(700);
            @include font-size(.22rem);
            @include line-height(.25rem);
          }
          &:nth-child(2){
            @include font-size(.12rem);
          }
        }
      }
      span{
        @include rect(.1rem,.21rem);
        @include text-color(#fff);
      }
    }
  }
  .login-center{
    @include rect(100%,.84rem);
    .logincenbox{
      @include rect(100%,100%);
      @include flexbox();
      a{
        @include flex();
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(center);
        @include align-items(center);
        @include background-color(#fff);
        span{
          &:nth-child(1){
            @include rect(.26rem,.26rem);
            @include flexbox();
            @include justify-content(center);
            @include align-items(center);
            @include text-color(#fff);
            border-radius:50%;
          }
          &:nth-child(2){
            @include font-size(.14rem);
            @include margin-top(.05rem);
          }
        }
        &:nth-child(1){
          span{
            &:nth-child(1){
              @include background-color(orange);
            }
            &:nth-child(2){
              @include text-color(#666);
            }
          }
        }
        &:nth-child(2){
          box-sizing:border-box;
          border-right:1px solid #eee;
          border-left:1px solid #eee;
          span{
            &:nth-child(1){
              @include background-color(red);
            }
            &:nth-child(2){
              @include text-color(#666);
            }
          }
        }
        &:nth-child(3){
          span{
            &:nth-child(1){
              @include background-color(green);
            }
            &:nth-child(2){
              @include text-color(#666);
            }
          }
        }
      }
    }
  }
  .login-bottom{
    .zhidi{
      @include rect(100%,.45rem);
      @include margin-top(.1rem);
      border-top:1px solid #e6e6e6;
      border-bottom:1px solid #e6e6e6;
      @include background-color(#fff);
      @include flexbox();
      a{
        @include flex();
        span{
          @include line-height(.45rem);
          &:nth-child(1){
            float:left;
            margin-left:.15rem;
            @include font-size(.21rem);
          }
          &:nth-child(2){
            float:left;
            margin-left:.1rem;
            @include font-size(.16rem);
            @include text-color(#666);
          }
          &:nth-child(3){
            float:right;
            margin-right:.15rem;
            @include text-color(#666  );
          }
        }
      }
    }
    .shangcheng{
      @include rect(100%,.9rem);
      @include margin-top(.1rem);
      @include background-color(#fff);
      border-top:1px solid #e6e6e6;
      border-bottom:1px solid #e6e6e6;
      @include flexbox();
      @include flex-direction(column);
      a{
        span{
          @include line-height(.45rem);
          &:nth-child(1){
            float:left;
            margin-left:.15rem;
            @include font-size(.21rem);
          }
          &:nth-child(2){
            float:left;
            margin-left:.1rem;
            @include font-size(.16rem);
            @include text-color(#666);
          }
          &:nth-child(3){
            float:right;
            margin-right:.15rem;
            @include text-color(#666  );
          }
        }
        &:nth-child(1){
          box-sizing:border-box;
          border-bottom:1px solid #eee;
        }
      }
    }
    .kefu{
      @include rect(100%,.9rem);
      @include margin-top(.1rem);
      @include background-color(#fff);
      border-top:1px solid #e6e6e6;
      border-bottom:1px solid #e6e6e6;
      @include flexbox();
      @include flex-direction(column);
      a{
        span{
          @include line-height(.45rem);
          &:nth-child(1){
            float:left;
            margin-left:.15rem;
            @include font-size(.21rem);
          }
          &:nth-child(2){
            float:left;
            margin-left:.1rem;
            @include font-size(.16rem);
            @include text-color(#666);
          }
          &:nth-child(3){
            float:right;
            margin-right:.15rem;
            @include text-color(#666  );
          }
        }
        &:nth-child(1){
          box-sizing:border-box;
          border-bottom:1px solid #eee;
        }
      }
    }
  }
}
</style>
