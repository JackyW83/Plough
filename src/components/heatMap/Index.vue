<template>
<div >
 
 <canvas id="canvas" height="600px" width="300px" />

   </div>
</template>

<script>
export default {
  data () {
  },
  mounted () {
    this.createHeatMap()
  },
  methods: {
    createHeatMap () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      var gradient = ctx.createRadialGradient(100, 50, 100, 100, 100, 0)
      gradient.addColorStop(0, 'rgba(5, 118, 198, 0)')
      gradient.addColorStop(1, 'rgba(255, 61, 46, .4)')
      ctx.fillStyle = gradient
      ctx.fillRect(10, 10, 200, 700)
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';

</style>
