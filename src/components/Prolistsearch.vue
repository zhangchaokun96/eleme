<template>
    <div class="shop">
        <div class="shoptuijian">
            <div class="shopdiv"></div>
            <span>推荐商家</span>
            <div class="shopdiv2"></div>
        </div>
        <div class="filter-header">
            <router-link to="" tag="a">
                <span>综合排序</span>
                <span class="iconfont icon-xiajiantou"></span>
            </router-link>
            <router-link to="" tag="a">
                <span>距离最近</span>
            </router-link>
            <router-link to="" tag="a">
                <span>品质联盟</span>
            </router-link>
            <router-link to="" tag="a">
                <span>筛选</span>
                <span class="iconfont icon-shaixuan"></span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    prolistsearch: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.shop{
    border-bottom:2px solid #eee;
    @include margin-top(.08rem);
    .shoptuijian{
        @include rect(100%,.36rem);
        @include flexbox();
        @include justify-content(center);
        @include align-items(center);
        .shopdiv{
            @include rect(.2rem,2px);
            @include background-color(#999);
        }
        .shopdiv2{
            @include rect(.2rem,2px);
            @include background-color(#999);
        }
        span{
            margin:0 4px;
        }
    }
    .filter-header{
        @include rect(100%,.4rem);
        @include flexbox();
        a{
            @include flex();
            @include flexbox();
            @include justify-content(center);
            @include align-items(center);
            @include text-color(#666);
        }
    }
}
</style>
