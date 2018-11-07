<template>
  <header class="header">
    <div class="header-box">
      <div class="header-box1">
        <span class="iconfont icon-zuobiao"></span>
        <span>西部硅谷B座</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.header-box{
  @include rect(100%,100%);
  @include line-height(100%);
  .header-box1{
    @include margin-top(.15rem);
    span{
      @include text-color(#fff);
      &:nth-child(1) {
        @include margin-left(.28rem);
      }
      &:nth-child(2) {
        @include margin(.05rem);
        @include font-size(.18rem);
      }
      &:nth-child(3) {
        @include font-size(.12rem);
      }
    }
  }
}
</style>
