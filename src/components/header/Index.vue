<template>
<div class="PrimaryNav u-shadow">
   <ul>
     <li v-for="m in menus" v-bind:class="{'selected' : m == selectedMenu}" >
       <router-link v-bind:to="{ name: m.link }"> {{m.name}} </router-link>
     </li>
   </ul>
   </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [{ name: 'User segment', link: 'segments' }, 
              { name: 'Heat map', link: 'heat' }, 
              { name: 'Funnel', link: 'funnel' }],
              { name: 'A/B Testing', link: 'ab-testing'}
      selectedMenu: null
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
.PrimaryNav {
  background: $main-color;
    width: 100%;
    z-index: 99;
    color:#fff;
    text-align: left;
    ul {
      height:100%;
      li{ 
        a {
          color:#fff;
          
        }
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
