<template>
    <div class="prolistshangjia">
      <router-link class="prolistshop" v-for = "(item,index) of list" :key = " item.id "  tag = "li" :to = "{name: 'detailspage', params: {id: index}}">
        <div class="shop-top">
          <div class="prolistshop-img" v-if="item.restaurant.image_path.substr(-4)=='jpeg'">
            <img :src="'https://fuss10.elemecdn.com/' + item.restaurant.image_path + '.' + item.restaurant.image_path.substr(-4) + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'"/>
          </div>
          <div class="prolistshop-img" v-else>
            <img :src="'http://fuss10.elemecdn.com/'+item.restaurant.image_path+'.'+item.restaurant.image_path.substr(-3)+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
          </div>
          <div class="pro-right">
            <div class="shoptotop">
              <i></i>
              <span class="shoptotop-span1">{{item.restaurant.name}}</span>
              <span class="shoptotop-span2">···</span>
            </div>
            <div class="shoptocenter">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="/>
              <i>{{item.restaurant.rating}}</i>
              <span>月售{{item.restaurant.recent_order_num}}单</span>
            </div>
            <div class="shoptobottom">
              <div class="shoptobottom-left">
                <span>￥{{item.restaurant.float_minimum_order_amount}}起送</span>
                <span v-if = "item.restaurant.float_delivery_fee === 0">配送免费</span>
                <span v-else>配送费￥{{item.restaurant.float_delivery_fee}}</span>
              </div>
              <div class="shoptobottom-right">
                <span>{{item.restaurant.distance}}米</span>
                <span>{{item.restaurant.order_lead_time}}分钟</span>
              </div>
            </div>
          </div>
        </div>
        <div class="shop-bottom">
          <div class="shopbox">
            <div class="shopbox-top">
              <span class="pinpai">口碑</span>
            </div>
            <div class="shopbox-bottom">
              <div class="shopbox-l-top">
                <span>首</span>
                <span>新用户下单立减17元</span>
                <span><i>2个活动</i><i class="iconfont icon-xiajiantou"></i></span>
              </div>
              <div class="shopbox-l-bottom">
                <span>减</span>
                <span class="mmspan">满28减16，满40减20，满58减26，满88减36</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  props: {
    prolistshangjia: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  created () {
    axios.get('/ele/restapi/shopping/v3/restaurants?latitude=22.625428&longitude=113.837942&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=0&rank_id=&terminal=h5').then(res => {
      // console.log(res.data.items)
      this.list = res.data.items
      // console.log(this.prolist)
    }).catch(err => console.log(err))
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.prolistshangjia{
  @include margin-bottom(.5rem);
  .prolistshop{
    border-bottom:2px solid #eee;
    @include padding-top(.2rem);
    @include padding-bottom(.2rem);
    @include rect(100%,1.725rem);
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    .shop-top{
      @include rect(94%,.65rem);
      @include flexbox();
      .prolistshop-img{
        @include rect(.75rem,.65rem);
        img{
          @include rect(100%,100%);
        }
      }
      .pro-right{
        @include rect(2.4rem,100%);
        @include margin-left(.2rem);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(space-around);
        .shoptotop{
          @include rect(100%,.2rem);
          i{
            float:left;
          }
          .shoptotop-span1{
            float:left;
          }
          .shoptotop-span2{
            float:right;
          }
        }
        .shoptocenter{
          @include rect(100%,.145rem);
          @include flexbox();
          @include line-height(.145rem);
          i{
            @include font-size(.13rem);
          }
          span{
            @include font-size(.14rem);
          }
        }
        .shoptobottom{
          @include rect(100%,.145rem);
          @include flexbox();
          @include justify-content(space-between);
          @include line-height(.145rem);
          .shoptobottom-left{
            @include flexbox();
            span{
              &:nth-child(1){
                @include margin-right(.03rem);
                border-right:.05rem solid #fff;
                @include font-size(.12rem);
              }
              &:nth-child(2){
                @include margin-left(.03rem);
                @include font-size(.12rem);
              }
            }
          }
          .shoptobottom-right{
            @include flexbox();
            span{
              &:nth-child(1){
                @include padding-right(.03rem);
                border-right:2px solid #eee;
                @include font-size(.1rem);
                @include text-color(#666);
              }
              &:nth-child(2){
                @include margin-left(.03rem);
                @include font-size(.1rem);
                @include text-color(#666);
              }
            }
          }
        }
      }
    }
    .shop-bottom{
      @include rect(94%,.67rem);
      .shopbox{
        @include rect(2.4rem,100%);
        @include margin-left(.95rem);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(space-between);
        .shopbox-top{
          @include rect(100%,.15rem);
          @include font-size(.12rem);
          .pinpai{
            @include rect(.28rem,.15rem);
            border:1px solid #eee;
            @include text-align(center);
            @include text-color(#666);
          }
        }
        .shopbox-bottom{
          @include rect(100%,.38rem);
          @include flexbox();
          @include flex-direction(column);
          @include justify-content(space-between);
          .shopbox-l-top{
            @include rect(100%,.13rem);
            @include font-size(.1rem);
            @include line-height(.13rem);
            span{
              &:nth-child(1){
                @include rect(.13rem,.13rem);
                @include background-color(green);
                @include text-color(#fff);
                @include margin-right(.1rem);
                float:left;
              }
              &:nth-child(2){
                float:left;
              }
              &:nth-child(3){
                float:right;
                @include margin-right(.1rem);
              }
            }
          }
          .shopbox-l-bottom{
            @include rect(100%,.13rem);
            @include font-size(.1rem);
            @include line-height(.13rem);
            span{
              &:nth-child(1){
                @include rect(.13rem,.13rem);
                @include background-color(red);
                @include text-color(#fff);
                @include margin-right(.1rem);
                float:left;
              }
              &:nth-child(2){
                width:1.8rem;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
                float:left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
