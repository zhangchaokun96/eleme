<template>
    <footer class="footer">
        <ul>
            <router-link to="/home" tag="li">
                <span class="iconfont icon-changyonglogo40"></span>
                <span>首页</span>
            </router-link>
            <router-link to="/kind" tag="li">
                <span class="iconfont icon-faxian"></span>
                <span>发现</span>
            </router-link>
            <router-link to="/cart" tag="li">
                <span class="iconfont icon-dingdan"></span>
                <span>订单</span>
            </router-link>
            <router-link to="/user" tag="li">
                <span class="iconfont icon-wode"></span>
                <span>我的</span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.footer{
    @include position();
    bottom:0;
    ul{
        @include rect(100%,100%);
        @include flexbox();

        li{
            @include flex();
            @include text-align();
            @include flexbox();
            @include flex-direction(column);
        }
    }
}
</style>
