<template>
    <div class="shangjiafoot">
        <div class="shangjiafoot-img" v-if = "canimg.substr(-4)=='jpeg'">
            <img :src="'//fuss10.elemecdn.com/' + canimg.substr(0,1) + '/' + canimg.substr(1,2) + '/' + canimg.substr(3,33) + '.' +canimg.substr(-4) +'?imageMogr/format/webp/thumbnail/686x/'"/>
        </div>
        <div class="shangjiafoot-img" v-else>
            <img :src="'//fuss10.elemecdn.com/' + canimg.substr(0,1) + '/' + canimg.substr(1,2) + '/' + canimg.substr(3,32) + '.' +canimg.substr(-3) +'?imageMogr/format/webp/thumbnail/686x/'"/>
        </div>
        <div class="foot-one">
            <p class="foot-one-p">商家推荐</p>
            <div class="foot-onebox">
                <div class="noe">
                    <div class="foot-kaishi" v-for = "item of canlist" :key = "item.id">
                        <div class="footone-img" v-if = "item.image_path.substr(-4)=='jpeg'">
                            <img :src="'//fuss10.elemecdn.com/' + item.image_path.substr(0,1) + '/' + item.image_path.substr(1,2) + '/' + item.image_path.substr(3,33) + '.' + item.image_path.substr(-4) +'?imageMogr/format/webp/thumbnail/240x/'"/>
                        </div>
                        <div class="footone-img" v-else>
                            <img :src="'//fuss10.elemecdn.com/' + item.image_path.substr(0,1) + '/' + item.image_path.substr(1,2) + '/' + item.image_path.substr(3,32) + '.' + item.image_path.substr(-3) + '?imageMogr/format/webp/thumbnail/240x/'"/>
                        </div>
                        <div class="footone-center">
                            <p>{{item.name}}</p>
                            <p>月售{{item.specfoods[0].recent_popularity}} 好评率100%</p>
                        </div>
                        <div class="footone-jiage">
                            <span>￥{{item.specfoods[0].price}}</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <listone :prolist = 'liebiaoshangjia'/>
        <listfoot :prolist = 'foodfooter'/>
    </div>
</template>
<script>
import liebiaoshangjia from '@/components/liebiaoshangjia'
import foodfooter from '@/components/foodfooter'
export default {
  data () {
    return {
      list: [],
      liebiaoshangjia: [],
      canimg: '',
      canlist: '',
      foodfooter: [],
    }
  },
  props: {
    shangjiafoot: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
      listone: liebiaoshangjia,
      listfoot: foodfooter
  },
  mounted () {
      this.bus.$on('shuzu', (data) => {
        //   console.log(data)
          this.canimg = data.posters[0].image_hash
      })
      this.bus.$on('shuzu2', (data) => {
        //   console.log(data)
          this.canlist = data
        //   console.log(canlist)
      })

  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.shangjiafoot{
    .shangjiafoot-img{
        margin-top:.1rem;
        @include rect(100%,1.1rem);
        @include flexbox();
        @include justify-content(center);
        img{
            @include rect(94%,100%);
        }
    }
    .foot-one{
        @include rect(100%,2.4rem);
        margin-top:.2rem;
        .foot-one-p{
            height:.22rem;
            font-size:.18rem;
            color:#333;
            font-weight:700;
            margin-bottom:.1rem;
            margin-left:.1rem;
        }
        .foot-onebox{
            @include rect(100%,2.2rem);
            @include flexbox();
            overflow:hidden;
            .noe{
                @include flexbox()
                overflow-x: scroll;
                .foot-kaishi{
                    @include rect(1.2rem,2.2rem);
                    flex:none;
                    margin-left:.1rem;
                    @include flexbox();
                    @include flex-direction(column);
                    .footone-img{
                        @include rect(1.2rem,1.2rem);
                        img{
                            @include rect(100%,100%);
                        }
                    }
                    .footone-center{
                        p{
                            &:nth-child(1){
                                margin:.05rem 0;
                                width:100%;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow: ellipsis;
                            }
                            &:nth-child(2){
                                margin-bottom:.08rem;
                                @include font-size(.12rem);
                                @include text-color(#666);  
                            }
                        }
                    }
                    .footone-jiage{
                        @include flexbox();
                        @include justify-content(space-between);
                        span{
                            &:nth-child(1){
                                @include text-color(red);
                                @include font-size(.18rem);
                            }
                            &:nth-child(2){
                                display:block;
                                @include rect(.2rem,.2rem);
                                border-radius:50%;
                                @include background-color(#0fbeff);
                                @include text-color(#fff);
                                @include flexbox();
                                @include justify-content(center);
                                @include align-items(center);
                            }
                        }
                    }
                }
                
            }
        }
    }
}
</style>
