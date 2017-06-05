<template>
<div >
        <h2>Existing funnels</h2>
        <ol class="segments">
            <li v-for="s in list" >  
            <router-link v-bind:to="{ name: 'funnelDetail',  params: { funnel: s ,name: s.name.toLowerCase().split(' ').join('-') } }" >
              {{s.name}}
            </router-link >
           </li>
        </ol>  
   </div>
</template>

<script>
export default {
  props: [ 'list' ]
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';

</style>
