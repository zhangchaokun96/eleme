<template>
    <div class="prolist">
        <div class="con-box1">
            <a href="">
                <span class="iconfont icon-fangdajing"></span>
                <span>寻找饿了么商家、商品名称</span>
            </a>
        </div>
        <div class="top-mold">
            <div class="top-moldbox">
                <div class="topmold-left">
                    <a href="#" v-for = "item of list1.entries" :key = "item.id">
                        <img :src="'https://fuss10.elemecdn.com/' + item.image_hash + '.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'"/>
                        <span>{{ item.name }}</span>
                    </a>
                </div>
                <div class="topmold-right">666</div>
            </div>
        </div>
        <div class="top-mold2">
            <div class="huodong">
                <div class="houdong-left">
                    <div class="hl-to1">
                        <h3>品质套餐</h3>
                        <div>搭配齐全吃得好</div>
                        <div>立即请购></div>
                        <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                    </div>
                </div>
                <div class="houdong-right" v-for = "item1 of list2.entries" :key = "item1.id">
                    <div class="hl-to1">
                        <h3>{{ item1.name }}</h3>
                        <div>{{ item1.description }}</div>
                        <div>1100正在抢></div>
                        <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <listser :prolist = 'prolistsearch'/>
        <list :prolist = 'prolistshangjia'/>
    </div>
</template>

<script>
import axios from 'axios'
import Prolistshangjia from '@/components/Prolistshangjia'
import Prolistsearch from '@/components/Prolistsearch'

export default {
  props: {
    prolist: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      prolistshangjia: [],
      prolistsearch: [],
      list1: '',
      list2: '',
      scroll: ''
    }
  },
  components: {
    list: Prolistshangjia,
    listser: Prolistsearch
  },
  created () {
    axios.get('/ele/restapi/shopping/openapi/entries?latitude=22.625428&longitude=113.837942&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(res => {
    //   console.log(res.data)
      this.list1 = res.data[0]
      this.list2 = res.data[1]
      // console.log(this.prolist)
    }).catch(err => console.log(err))
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.prolist{
    @include rect(100%,100%);
    .con-box1{
        position:sticky;
        top:0;
        @include rect(100%,.44rem);
        @include background-color(#0085ff);
        @include flexbox();
        @include justify-content(center);
        @include align-items(center);
        a{
            @include display();
            @include rect(90%,80%);
            @include background-color(#fff);
            @include flexbox();
            @include justify-content(center);
            @include text-color(#999);
            @include align-items(center);
        }
    }
    .top-mold{
        @include rect(100%,1.77rem);
        @include overflow(hidden);
        .top-moldbox{
            @include rect(200%,100%);
            @include flexbox();
            .topmold-left{
                @include flex();
                @include flexbox();
                flex-wrap:wrap;
                @include overflow(hidden);
                a{
                    @include rect(20%, 50%);
                    @include display();
                    @include flexbox();
                    @include justify-content(center);
                    @include flex-direction(column);
                    @include align-items(center);
                    img{
                        @include rect(.45rem,.45rem);
                    }
                    span{
                        @include font-size(.12rem);
                        @include text-color(#666);
                    }
                }
            }
            .topmold-right{
                @include flex();
            }
        }
    }
    .top-mold2{
        @include margin-top(.25rem);
        @include rect(3.5rem,1.4rem);
        @include margin-left(.125rem);
        .huodong{
            @include flexbox();
            @include rect(3.5rem,1.4rem);
            @include justify-content(center);
            .houdong-left{
                @include rect(1.61rem,1.4rem);
                .hl-to1{
                    @include rect(100%,100%);
                    padding:.12rem 0 0 .15rem;
                    position:relative;
                    z-index:20;
                    img{
                        position:absolute;
                        bottom:0;
                        right:0;
                        @include rect(1.24rem,.8rem);
                        z-index:1;
                    }
                }
            }
            .houdong-right{
                @include rect(1.61rem,1.4rem);
                .hl-to1{
                    @include rect(100%,100%);
                    padding:.12rem 0 0 .15rem;
                    position:relative;
                    z-index:20;
                    img{
                        position:absolute;
                        bottom:0;
                        right:0;
                        @include rect(1.24rem,.8rem);
                        z-index:1;
                    }
                }
            }
        }
    }
}
</style>
