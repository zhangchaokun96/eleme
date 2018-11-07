<template>
  <div id="all">
    <router-view name="header"/>
    <div class="conter">
      <router-view name="content"/>
    </div>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
   
}
</script>
