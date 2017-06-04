<template>
<div class="container">
    <div class="left">
        <funnel-list  :list="funnels" ></funnel-list>
        <router-link :to="'/funnel/add'">+ New Funnel</router-link>
    </div>  
    <div class="left" style="width:65%">
        <transition name="fade">
            <keep-alive>
                <router-view :segments="segments" ></router-view>
            </keep-alive>
            </transition>
    </div>
  </div>
</template>

<script>
import funnelList from './List'
export default {
  props: [ 'segments' ],
  data () {
    return {
      funnels: [
        { name: 'page view-signup-add cart-order',
          steps: [ 'page view', 'sign up', 'add cart', 'order' ] },
        { name: 'order-share',
          steps: [ 'order', 'share' ] }
      ]
    }
  },
  components: { 'funnel-list': funnelList }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss'; 
</style>
