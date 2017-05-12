<template>
<div class="PrimaryNav u-shadow">
   <ul>
     <li v-on:click="menuChange(m)" v-for="m in menus" v-bind:class="{'selected' : m == selectedMenu}" >{{m}}</li>
   </ul>
   </div>
</template>

<script>
export default {
  data () {
    return {
      menus: ['User segment', 'Heat', 'Funnel'],
      selectedMenu: null
    }
  },
  methods: {
    menuChange (m) {
      this.selectedMenu = m
      this.$emit('menuChanged', m)
    }
  }
}
</script>

<style lang="scss">
.PrimaryNav {
  background: #3d5165;
  
    width: 100%;
    z-index: 99;
    color:#fff;
    text-align: left;
    ul {
      height:100%;
      li{
        display:inline-block;
        margin: 0px 20px;
        padding: 16px 0px;
        cursor: pointer;
        }
        li.selected {
          border-bottom: 4px solid #fff;
        }
    }
}

</style>
