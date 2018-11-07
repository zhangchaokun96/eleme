<template>
    <div class="shagelist">
        <div class="shagelist-top">
            <img v-if = "topimg.substr(-4)=='jpeg'" :src="'//fuss10.elemecdn.com/' + topimg.substr(0,1) + '/' + topimg.substr(1,2) + '/' + topimg.substr(3,33) + '.' +topimg.substr(-4) +'?imageMogr/format/webp/thumbnail/750x/'"/>
            <img v-else :src="'//fuss10.elemecdn.com/' + topimg.substr(0,1) + '/' + topimg.substr(1,2) + '/' + topimg.substr(3,32) +'.' +topimg.substr(-3) + '?imageMogr/format/webp/thumbnail/750x/'"/>
            <div class="shangjialogin">
                <img v-if = "topimg2.substr(-4)=='jpeg'" :src="'//fuss10.elemecdn.com/' + topimg2.substr(0,1) + '/' + topimg2.substr(1,2) + '/' + topimg2.substr(3,33) + '.' +topimg2.substr(-4) + '?imageMogr/format/webp/thumbnail/150x/'" />
                <img v-else :src="'//fuss10.elemecdn.com/' + topimg2.substr(0,1) + '/' + topimg2.substr(1,2) + '/' + topimg2.substr(3,32) + '.' +topimg2.substr(-3) +'?imageMogr/format/webp/thumbnail/150x/'" />
            </div>
            <div class="shagelist-bottom">
                <h2><span>{{rst.name}}</span><span class="iconfont icon-youjiantou"></span></h2>
                <div class="pingjia">
                    <span>评价{{rst.rating}}</span>
                    <span>月售{{rst.recent_order_num}}</span>
                    <span>蜂鸟快送约{{rst.order_lead_time}}分钟</span>
                </div>
                <div class="youhui">
                    <span>￥2</span>
                    <span>满58元可用</span>
                    <span>领取</span>
                </div>
                <div class="youhui2">
                    <span>满减</span>
                    <span>满20减10，满60减30，满80减35</span>
                    <div class="youhuibox">10个优惠的</div>
                </div>
                <p>公告：{{rst.promotion_info}}</p>
            </div>
        </div>
        <div class='kind1'>
            <span v-for='(item, index) of nav' :key='index' @click="addClassCom(index,item.coms)" :class="{ activeColor:index==current}">{{item.name}}</span>                 
        </div>
        <div class='coms'>
            <keep-alive>
                <component :is='coms'></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import {  Popup } from 'mint-ui'
import shangjiafoot from '@/components/shangjiafoot'
import pageTwo from '@/components/pageTwo'

Vue.use(Popup)
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
      list: [],
      shangjiafoot: [],
      topimg: '',
      topimg2: '',
      rst: '',
      tobus: '',
      shangjia: '',
      coms: '',
      current: '',
      nav: [
            {
                name: '点餐',
                coms: 'list'
            },
            {
                name: '评价',
                coms: 'list2'
            },
            {
                name: '商家',
                coms: ''
            }
           ],
        current: 0,
        coms: 'list'
    }
  },
  components: {
    'list': shangjiafoot,
    'list2': pageTwo
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    let id = this.$route.params.id + 1
    // console.log(id)
    axios.get('http://localhost:3000/die?id=' + id).then(res => {
    //   console.log(res.data)
      this.list = res.data
      this.rst = this.list[0].rst
      this.topimg = this.list[0].rst.shop_sign.image_hash
      this.topimg2 = this.list[0].rst.image_path
      this.tobus = this.list[0].recommend[0].items
      this.shangjia = res.data
      this.bus.$emit('shuzu',this.rst)
      this.bus.$emit('shuzu2',this.tobus)
      this.bus.$emit('shuzu3',this.shangjia)
    })
  },
  methods: {
    addClassCom (index,coms) {   
         this.current = index;
         this.coms = coms;
    },
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        console.log(1111111)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.shagelist{
    @include rect(100%,100%);
    @include flexbox();
    @include flex-direction(column);
    position: relative;
    .shagelist-top{
        @include rect(100%,2.62rem);
        @include flexbox();
        @include flex-direction(column);
        position:relative;
        img{
            @include rect(100%,1rem);
        }
        .shangjialogin{
            @include rect(.75rem,.75rem);
            position:absolute;
            top:0;
            left:50%;
            margin-top:.375rem;
            margin-left:-.375rem;
            img{
                @include rect(100%,100%);
            }
        }
        .shagelist-bottom{
            @include flex();
            @include rect(100%,auto);
            padding-top:.3rem;
            @include flexbox();
            @include flex-direction(column);
            @include justify-content(center);
            @include align-items(center);
            h2{
                span{
                    &:nth-child(1){
                        width:1.9rem;
                        overflow:hidden;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                    }
                }
            }
            .pingjia{
                @include rect(2.3rem,.2rem);
                line-height:.2rem;
                font-size:.12rem;
                text-align:center;
                color:#999;
                span{
                    margin-right:.05rem;
                }
            }
            .youhui2{
                @include flexbox();
                span{
                    &:nth-child(1){
                        margin-right:.1rem;
                        @include font-size(.12rem);
                        background:red;
                        @include text-color(#fff);
                        padding:0 .02rem;
                        line-height:.20rem;
                        height:.18rem;
                    }
                    &:nth-child(2){
                        font-size:.12rem;
                        @include rect(2rem,.2rem);
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow: ellipsis;
                    }
                }
                .youhuibox{
                    @include rect(.72rem,.2rem);
                    font-size:.12rem;
                    color:#999;
                }
            }
            h2{
                @include rect(2.7rem,.25rem);
                @include line-height(.25rem);
                text-align:center;
                span{
                    &:nth-child(1){
                        text-align: left;
                        overflow: hidden;
                        @include font-size(.25rem);
                        font-weight:700;
                        @include rect(2.45rem,.25rem);
                    }
                }
            }
            p{
                @include rect(80%,.2rem);
                @include text-color(#999);
                white-space:nowrap;
                overflow:hidden;
                text-overflow: ellipsis;
                @include font-size(.12rem);
            }
        }
    }
}
.kind1{
    position:sticky;
    top:0;    
      height:35px;
      width:100%;
      justify-content:space-around;
      display:flex;
      align-items: center;
      color:#666;
      padding-top:14px;
      border-bottom:1px solid #ddd;
     padding-bottom:7px;
     z-index:1;
     background:#fff;
}
.kind1 span{
     padding-bottom:8px
}
/*.kind1 span:active{
    font-weight:600;
    color:#333;
    border-bottom:2px solid #0af;
}
*/
.kind1 .btn1,.kind1 .btn2,.kind1 .btn3{
    font-weight:600;
    color:#333;
    border-bottom:2px solid #0af;
}






.kind1{
    position:sticky;
    top:0;         
    height:35px;
    width:100%;
    justify-content:space-around;
    display:flex;
    align-items: center;
    color:#666;
    padding-top:14px;
    border-bottom:1px solid #ddd;
    padding-bottom:8px;
    
     z-index:1;
     background:#fff;


}

.kind1 span{
     padding-bottom:7px
}

.activeColor{
     color:#666;
     font-weight:bold;
     border-bottom:2px solid #2395ff;
}
.isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:999;
}

</style>
