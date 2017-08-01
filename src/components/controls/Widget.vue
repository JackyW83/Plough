<template>
  <div  class="widget">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
.widget {
    background-color: #eee;
    border-radius: 8px;
    display: inline-block;
    padding: 1em;
    margin: .5em;
    ul {
      li {
        text-align: left;
      }
    } 
}
</style>
