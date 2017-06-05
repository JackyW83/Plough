<template>
      <table >
        <thead>
            <tr>
                <td>
                  Step
                </td>
                <td>
                  People who did this step
                </td>
                <td>
                 Median time complete this step
                </td>
                <td>
                 Conversion rate base on previous step
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(step, index) in steps">
                <td>{{step.name}}</td>
                <td>{{step.count}}</td>
                <td>{{getSeconds()}}s</td>
                <td> 
                  <progress-bar v-on:onLeftClick="showUser" v-on:onRightClick="showUser" :total="getPreviousCount(index)" :current="step.count" />
                </td>
            </tr>
        </tbody>
      </table>
</template>

<script>
import random from '../../utlis/Random'
import progress from '../controls/Progress'
export default {
  props: [ 'steps', 'total' ],
  components: {
    'progress-bar': progress
  },
  methods: {
    getPreviousCount (index) {
      if (index === 0) {
        return this.total
      } else {
        return this.steps[index - 1].count
      }
    },
    getSeconds () {
      return random(0, 10)
    },
    showUser () {
      this.$emit('showUserPanel')
    }
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
</style>
