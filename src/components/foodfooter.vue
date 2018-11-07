<template>
    <div class="foodfooter">
        <div class="foodfooter-top">
            <span>以减10元，再买24元减30元</span>
            <mt-popup v-model="popupVisible" position="bottom" class='popup'>
                <div class="gouwucheliebiao">
                    <div class="gouwucheone">
                        <span>已选商品</span>
                        <span>清除</span>
                    </div>
                </div>
            </mt-popup>
        </div>
        <div class="foodfooter-bottom" name='popupVisible'>
            <div class="tubiao-img">
                <span class="iconfont icon-gouwuche" v-on:click="dianji1"></span>
            </div>
            <div class="tubiao-qian">￥22</div>
            <div class="tubiao-jiesuan">去结算</div>
        </div>
    </div>
</template>
<script>
import { Popup } from 'mint-ui'
import Vue from 'vue'
Vue.use(Popup)
export default {
    data () {
    return {
        list: [],
        popupVisible: false
    }
  },
  props: {
    foodfooter: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
      dianji1 () {
          this.popupVisible = !this.popupVisible
          console.log(this.popupVisible)
      }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.foodfooter{
    @include rect(100%,.8rem);
    background:rgba(61,61,63,.9);
    position:fixed;
    bottom:0;
    z-index:3000;
    .foodfooter-top{
        background-color:#fffad6;
        font-size:.12rem;
        text-align:center;
    }
    .popup{
        @include rect(100%,1rem);
            bottom:.6rem;
        .gouwucheliebiao{
            @include rect(100%,100%);
            .gouwucheone{
                @include rect(100%,.3rem);
                @include flexbox();
                @include justify-content(space-between);
                @include background-color(#eceff1);
                span{
                    font-size:.16rem;
                    &:nth-child(1){
                        margin-left:.3rem;
                    }
                    &:nth-child(2){
                        margin-right:.3rem;
                    }
                }
            }
        }
    }
    .foodfooter-bottom{
        height:100%;
        @include flexbox();
        .tubiao-img{
            @include rect(25%,100%);
            span{
                display:block;
                @include rect(.6rem,.6rem);
                background:#3190e8;
                border-radius:100%;
                border:4px solid #444 ;
                position:absolute;
                bottom:.2rem;
                left:.2rem;
                font-size:.3rem;
                @include flexbox();
                @include justify-content(center);
                line-height:.55rem;
                color:#fff;
            }
        }
        .tubiao-qian{
            @include flex();
            font-size:.2rem;
            color:#fff;
            font-weight:700;
            line-height:.6rem;
        }
        .tubiao-jiesuan{
            @include rect(30%,100%);
            background:#38ca73;
            @include flexbox();
            @include justify-content(center);
            line-height:.6rem;
            color:#fff;
            font-size:.18rem;
            font-weight:700;
        }
    }
}
</style>
