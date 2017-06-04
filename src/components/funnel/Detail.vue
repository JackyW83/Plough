<template>
<div class="container">
      <div class="chart">

      </div>
      
      <select >
        <option v-for="s in segments" >
            {{s.name}}
         </option>
      </select>

      <table >
        <thead>
            <tr>
                <td>
               
                </td>
                <td>
                  People who did this step
                </td>
                <td>
                 Median time from previous step
                </td>
                <td>
                 Conversion rate based on the previous step
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="step in funnel.steps">
                <td>{{step}}</td>
            </tr>
        </tbody>
      </table>
   </div>
</template>

<script>
export default {
  props: [ 'segments' ],
  data () {
    return {
      funnel: null
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log(1)
      if (this.$route.params.funnel) {
        this.funnel = this.$route.params.funnel
      }
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
.chart {
    width: 90%;
    height: 400px;
    background-color: #eee;
}
</style>
