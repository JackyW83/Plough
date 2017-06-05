<template>
  <div  class="progress">
    <div class="progress-bar">
      <div  v-on:click="leftClick" v-bind:style="{ width: indicatorLength + '%' }" class="indicator outerglow"></div>
      <div  v-on:click="rightClick" v-bind:style="{ left: indicatorLength + '%', width: 100 - indicatorLength + '%' }" class="empty outerglow"></div>
    </div>
    <span> {{ indicatorLength.toFixed(2) + '%' }} </span>
  </div>
</template>

<script>
export default {
  props: [ 'total', 'current' ],
  computed: {
    indicatorLength: function () {
      if (this.total === 0) {
        return 0
      } else {
        return this.current / this.total * 100
      }
    }
  },
  methods: {
    leftClick () {
      this.$emit('onLeftClick')
    },
    rightClick () {
      this.$emit('onRightClick')
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
div.progress {


div.progress-bar {
  width: 70%;
  float: left;
  border: 1px solid #aaa;
  height: 10px;
  position: relative;
  border-radius: 5px;
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.2);
  div.indicator {
    background-color: $indicator-color;
    height: 100%;
    border-radius: 5px;
    width: 0px; 
    cursor: pointer;
  } 
  div.empty {
    position:absolute;
    height: 100%;
    top:0px;
    border-radius: 5px; 
    cursor: pointer;
  }
}
span {
    display: inline-block; 
    float:right;
    width: 28%;
    text-align:right;
    font-size:.8em
  }
  span::after {
    content: '';
    clear:both;
    display: block
  }
  }
</style>
