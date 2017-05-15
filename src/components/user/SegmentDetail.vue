<template>
<div>
   <h3>
     segment: {{segment.dimensions[0].dimension}}  {{segment.dimensions[0].operator}} {{segment.dimensions[0].val}}
   </h3>
    <transition name="slide-fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      segment: null
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log(this.$route)
      this.segment = this.$route.params
    }
  }
}
</script>
