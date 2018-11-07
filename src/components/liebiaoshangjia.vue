<template>
    <div class="liebiaoshangjia">
        <div class='food'>
            <div class='nav' id='nav'>
                <ol>
                    <li class='color d_jump' v-for='(item, index) of shangjialist' :key='index' @click="addClass(index)" :class="{ activeColor:index==current}">{{item.name}}</li>
                </ol>
            </div>
            <div class='foods' id='foods'>
                <dl>   
                    <ul >
                        <li v-for='(item, index) of shangjialist' :key='index' @click="func($event)" @click.native="jump(index)">
                        <dt >{{item.name}}<span class='eats'>{{item.description}}</span></dt>
                            <dd  ref='title'  id='title' v-for='(itm, index1) of item.foods' :key='index1'>
                                <div class='list'>
                                    <img v-if = "itm.image_path.substr(-4)=='jpeg'" :src="'//fuss10.elemecdn.com/' + itm.image_path.substr(0,1) + '/' + itm.image_path.substr(1,2) + '/' + itm.image_path.substr(3,33) + '.' +itm.image_path.substr(-4) +'?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" style='margin-right:5px'/>
                                    <img v-else :src="'//fuss10.elemecdn.com/' + itm.image_path.substr(0,1) + '/' + itm.image_path.substr(1,2) + '/' + itm.image_path.substr(3,32) +'.' +itm.image_path.substr(-3) + '?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" style='margin-right:5px'/>
                                    <div class='text'>
                                        <h2>{{itm.name}}</h2>
                                        <h3>{{itm.description}}</h3>
                                        <h4 style='text-indent:5px'>{{itm.tips}}</h4>
                                        <div class='textFoot'>
                                          <h5>
                                            <span>￥{{itm.satisfy_count}}<em>￥{{itm.satisfy_rate}}</em>
                                            </span>
                                          </h5>
                                          <div class='calc'>
                                            <span   @click='deleteShop($event)' >－</span>
                                            <em ref='Num' >{{count}}</em>
                                            <i @click='addShop($event)' class='addbtn' >+</i>
                                          </div>
                                        </div>
                                    </div> 
                                </div>
                            </dd>
                        </li>
                    </ul>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
    return {
        list: [],
        shangjialist: '',
        current:-1,
        count:0
    }
  },
  props: {
    liebiaoshangjia: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
      this.bus.$on('shuzu3',data => {
          console.log(data)
          this.shangjialist = data[0].menu
          console.log(this.shangjialist)
      })
  },
  methods: {
      func(e){
        
    },
    addClass (index) {
      this.current = index
    },
    addShop (e) {    
       e.target.previousElementSibling.style.display = 'block';
       e.target.previousElementSibling.innerHTML = Number(e.target.previousElementSibling.innerHTML) + 1;
       e.target.previousElementSibling.previousElementSibling.style.display = 'block';
       this.count = e.target.previousElementSibling.innerHTML;
       this.price = e.target.parentNode.previousElementSibling.children[0].innerText.split('￥')[1];
       console.log(e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML)
       this.name = e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML
       var obj ={
          'sham': true,
          'name': this.name,
          'num':  this.count,
          'price': this.price
       }
       this.$brother.$emit('color', obj)
       this.add (obj)
       this.count = JSON.parse(localStorage.keys).num
    },
    deleteShop (e) {
      var obj ={}
       if(e.target.nextElementSibling.innerHTML < 1){
           e.target.nextElementSibling.style.display = 'none';
           e.target.style.display = 'none';
            obj.sham = false;
       } else {
           e.target.nextElementSibling.innerHTML = Number(e.target.nextElementSibling.innerHTML) - 1;
            this.count = e.target.nextElementSibling.innerHTML;
            this.price = e.target.parentNode.previousElementSibling.children[0].innerText.split('￥')[1];
            obj.name = e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML;
            obj.sham = true;
            obj.num = this.count;
            obj.price = this.price    
       }
            this.$brother.$emit('color', obj)
            this.del (obj)
            this.count = JSON.parse(localStorage.keys).num
    },
    add (obj) {
      var value = localStorage.keys ;
      if(!value){
            value=[]
        }else{
          value=JSON.parse(value)
        }
        var bstop=true;
        for(var i=0;i<value.length;i++){
          if(obj.name==value[i].name){
            value[i].num++;
              bstop=false;
              break;
          }
        }
          if(bstop){
            obj.num = 1;
              value.push(obj)
          }
          localStorage.keys=JSON.stringify(value);
   },
  del (obj) {
    var value = localStorage.keys ;
    if(!value){
        value=[]
    }else{
      value=JSON.parse(value)
    }
    var bstop=true;
    for(var i=0;i<value.length;i++){
      if(obj.name==value[i].name){
        value[i].num--;
          bstop=false;
          break;
      }
    }
      if(bstop){
        for(var i=0;i<value.length;i++){
        if (obj.sham == true) {
        obj.num = 1;
          value.push(obj)
          }
        }
      }
      localStorage.keys=JSON.stringify(value);
    }
  },
  jump (index) {
    let jump = document.querySelectorAll('.d_jump')
    // 获取需要滚动的距离
    let total = jump[index].offsetTop
    // Chrome
    document.body.scrollTop = total
    // Firefox
    document.documentElement.scrollTop = total
    // Safari
    window.pageYOffset = total
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.liebiaoshangjia{
    @include rect(100%,6rem);
    overflow:hidden;
    margin-bottom:.8rem;
}
.foods{
    overflow-y:scroll;
}
.food{
  display:flex;
  width:100%;
  height:100%;
  margin-top:3%;
}
.food .nav{
  width:72px;
  height:100%;
  background:#f5f5f5;
  font-size:12px;
  
  color:#666;
  position:sticky;
  top:.35rem;            
  z-index:999;

}
.food .nav ol{
  width:100%;
  background:#f5f5f5;
  height:auto;
  border:none;

}

.food .nav ol li{
  width:72px;
  height:46px;
  line-height:46px;
  text-indent:5px;
  
}
.food .foods{
  width:78%;
  margin-left:1%;
  padding-left:5px;
}

.food .foods dl dt{
  width:100%;
  font-size:12px;
  font-weight:800;
  display:flex;
}

.food .foods dl .eats{
    font-size:9px;
  -webkit-transform:scale(0.8);
  color:#666
}


.food .foods dl .list{
  display:flex;
  width:100%;
  height:90px;
  padding:8px 0;
  margin-bottom:5%;
}

.food .foods dl .list img{
  width:80px;
  height:80px
}

.food .foods dl .list .text{
  flex:1;
  display:flex;
  flex-direction:column;
  padding-right:10px
}


.food .foods dl .list .text h3{
     font-size:9px;
  -webkit-transform:scale(0.8);
  color:#666;
  width:160px;
  overflow:hidden;
  height:22px;
  margin-left:-9%;
   text-overflow:ellipsis;
    white-space:nowrap;
}

.food .foods dl .list .text h4{
     font-size:9px;
  -webkit-transform:scale(0.8);
     color:#666;
     margin-left:-12%;
}

.food .foods dl .list .text h2{
    width:100px;
     text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
            font-size:13px
}





.food .foods dl .list .text .textFoot{
    
    display:flex;
    color:#ff5339;
    font-size:15px
}

.food .foods dl .list .text .textFoot h5{
	width:50%
}

.food .foods dl .list .text .textFoot h5 em{
	font-size:12px;
	color:#666;
	text-decoration:line-through
}

.food .foods dl .list .text .textFoot .calc{
	display:flex;
	width:70px;
  justify-content:flex-end
}


.food .foods dl .list .text .textFoot .calc i{
	background:rgb(35, 149, 255);
  border-radius:50%;
  color:#fff;
  width:20px;
  height:20px;
  display:block;
  line-height:22px;
  align:center;
  text-indent:6px;
  
   

}
.food .foods dl .list .text .textFoot .calc em{
	font-size:12px;
	color:#333;
  padding:0 4px;
  display:none
}


.food .foods dl .list .text .textFoot .calc span{
  border-radius:50%;
  color:#2396ff;
  width:20px;
  height:20px;
  border:1px solid #2396ff;
  display:block;
  line-height:17px;
  align:center;
  text-indent:1px;
  display:none


}
</style>
