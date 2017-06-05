<template>
<div class="container">
    <div class="left">
        <funnel-list  :list="funnels" ></funnel-list>
        <router-link :to="'/funnel/add'">+ New Funnel</router-link>
    </div>  
    <div class="left" style="width:65%">
        <transition name="fade">
            <keep-alive>
                <router-view :segments="segments"  v-on:showUserPanel="checkUsers"></router-view>
            </keep-alive>
            </transition>
    </div>
    <div class="pinned" v-show="showUsers">
    <div class="PrimaryNav u-shadow" style="height: 50px; line-height: 50px; padding-left:15px;">
      Users
    </div>
    <div class="content" >
      <iframe height="100%" width="100%" src="/#/users?noheader=1" />
      </div>
       <div class="footer">
        <a  @click="showUsers = false">Close </a>
    </div>
    </div>
   
  </div>
</template>

<script>
import funnelList from './List'
import random from '../../utlis/Random'
import userList from '../user/UserList'
export default {
  props: [ 'segments' ],
  data () {
    return {
      funnels: [
        { name: 'page view-signup-add cart-order',
          all: random(1, 10000),
          steps: [ { name: 'page view', count: null },
                   { name: 'sign up', count: null },
                   { name: 'add cart', count: null },
                   { name: 'order', count: null } ] },
        { name: 'order-share',
          all: random(1, 10000),
          steps: [ { name: 'order', count: null },
                   { name: 'share', count: null } ] },
        { name: 'login-product view-share',
          all: random(1, 10000),
          steps: [ { name: 'login', count: null },
                   { name: 'product view', count: null },
                   { name: 'share', count: null } ] }
      ],
      showUsers: false
    }
  },
  created () {
    this.funnels.forEach((f) => {
      f.steps.forEach((s, i) => {
        if (i === 0) {
          s.count = random(1, f.all)
        } else {
          s.count = random(0, f.steps[i - 1].count)
        }
      })
    })
  },
  watch: {
    '$route': 'fresh'
  },
  components: {
    'funnel-list': funnelList,
    'user-list': userList
  },
  methods: {
    checkUsers () {
      this.showUsers = true
    },
    fresh () {
      this.showUsers = false
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss'; 
.pinned {
  background-color: $main-color;
  position: fixed;
  top: 0px;
  width: 60%;
  right: 0px;
  box-shadow: 0px 0px 5px 5px rgba(200, 200, 200, .5);
  overflow: auto;
  height: 100%;
   overflow-x: hidden;
  .content {
    overflow: hidden; 
    height:90%;
    background-color: #fff
  }
  .footer {
    margin-top:20px;
    padding-left: 15px;
    a{
      color: $font-color-in-main
    }
  }
}
</style>
