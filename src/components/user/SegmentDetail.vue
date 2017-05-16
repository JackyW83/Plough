<template>
<div>
   <h3>
     segment info:
   </h3>
   <ul v-if="segment">
    <li v-for="dim in segment.dimensions">
     {{dim.dimension}}  {{dim.operator}} {{dim.val}}
    </li>
   </ul>
    <transition name="fade">
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
      if (this.$route.params.segment) {
        this.segment = this.$route.params.segment
      }
    }
  }
}
</script>
