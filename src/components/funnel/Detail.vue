<template>
<div >
      <p>Segment:    <select  >
        <option> all user </option>
        <option v-for="s in segments" >
            {{s.name}}
         </option>
      </select> 
        <span  v-for="ss in selectedSegments.slice(1, selectedSegments.length)">
        <select >
        <option> all user </option>
        <option v-for="s in segments" >
            {{s.name}}
         </option>
      </select>
       VS </span> 
        <button @click="addComparsion">+</button>
      </p>

      <div class="chart" style="margin: 2em 0px"> 
        <div class="segment outerglow" v-bind:style="{ width: 1 / funnel.steps.length * 100 + '%', 
                                      left: 1 / funnel.steps.length * 100 * index + '%' }" 
             v-for="(s, index) in funnel.steps">
             {{s.name}}
          <div v-for=" (c, i) in selectedSegments " v-bind:style="{ height: s.count / funnel.all * 100 + '%', left: calcLeft(i) }" class="bar outerglow"></div>  
          
          <div class="arrow" @click="checkUsers">
            {{  (s.count / funnel.all * 100).toFixed(2) + '%' }}
          </div>
        </div>
      </div> 
   
      <step-list v-on:showUserPanel="checkUsers" v-if="funnel" :steps="funnel.steps" :total="funnel.all" /> 
   </div>
</template>

<script>
import stepList from './StepList'
export default {
  props: [ 'segments' ],
  components: {
    'step-list': stepList
  },
  data () {
    return {
      funnel: null,
      selectedSegments: [ 'all' ]
    }
  },
  watch: {
    '$route': 'fetchData',
    'funnel': 'createChart'
  },
  methods: {
    fetchData () {
      if (this.$route.params.funnel) {
        this.funnel = this.$route.params.funnel
      }
    },
    checkUsers () {
      this.$emit('showUserPanel')
    },
    addComparsion () {
      this.selectedSegments.push(this.segments[0])
    },
    createChart () {

    },
    calcLeft (i) {
      var avg = 100 / this.selectedSegments.length
      var l = (avg - 15) / 2
      return l + (i * avg) + '%'
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
button {
  width:40px;
  height: 40px;
  border-radius: 50%;
  border: 0px;
  font-size:1.2em;
  cursor:pointer;
}
.chart {
    width: 100%;
    height: 400px;
    background-color: $section-color;
    position: relative;
    border-right: 1px $secondary-color solid;
    .segment {
      position: absolute;
      height: 100%;
      top: 0px; 
      text-align:center;
      border: 1px $secondary-color solid;
      border-right: 0px $section-color solid;
      .bar {
        display: inline-block;
        background-color: $chart-color1;
        height: 20%;
        width: 15%;
        position: absolute;
        bottom: 0px;
      }
      .arrow {
        position: absolute;
        right: 0px;
        min-width: 80px;
        cursor: pointer;
        top:48%;
        height: 60px;
        background-image:url(../../assets/arrow.png);
        background-size: contain;
        background-repeat: no-repeat;
        line-height: 60px;
        text-align: center;
        font-size: .7em;
        background-position: 50%;
        color: #fff;
      }
    }
}
</style>
