<template>
  <div class="center-all">
    <Prolist :prolist = 'prolist'/>
  </div>
</template>

<script>
import axios from 'axios'
import Prolist from '@/components/Prolist'
export default {
  data () {
    return {
      prolist: []
    }
  },
  components: {
    Prolist
  },
  created () {
    axios.get('/ele/restapi/shopping/openapi/entries?latitude=22.625428&longitude=113.837942&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(res => {
      console.log(res.data)
      this.prolist = res.data
      // console.log(this.prolist)
    }).catch(err => console.log(err))
  },
  watch:{
    
  },
 
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.center-all{
  @include rect(100%,100%);
}
</style>
