<template>
<div > 
     <widget v-for="w in widgets">
      <h2 slot="content">{{w.title}}</h2>
      <div slot="content"> 
        <ul>
          <li v-for="(bar, i) in w.bars">
           baidu <div v-bind:style="{ 'width': (bar / 10000 * 100) + '%' }" v-bind:class="['bar', 'bar' + (i + 1)]">{{(bar / 1000).toFixed(1) + 'k'}}</div>
          </li> 
        </ul> 
       </div>
     </widget>
   </div>
</template>

<script>
import widget from '../controls/Widget'
import random from '../../utlis/Random'
export default {
  data () {
    return {
      widgets: [
        { title: 'All Users by Media Source', bars: [] },
        { title: 'Product views', bars: [] },
        { title: 'Shares (by geography)', bars: [] },
        { title: 'Purchase by Amount', bars: [] },
        { title: 'Purchase by SKU', bars: [] },
        { title: 'Your Top Events', bars: [] }
      ]
    }
  },
  created () {
    this.widgets.forEach(w => {
      for (let i = 0; i < 4; i++) {
        w.bars.push(random(1000, 10000))
      }
    })
  },
  components: {
    widget: widget
  }
}
</script>

<style lang="scss">
@import  '../../styles/var.scss';
.bar {
  height: 20px;
  margin-bottom: .2em;
  background-color: $chart-color1;
  color: #fff;
  padding: .1em.2em;
  text-align:left;
  border-radius:3px;
  display:inline-block;
}
.bar1 {
  background-color: $chart-color2;
}
.bar2 {
  background-color: $chart-color3;
}
.bar3 {
  background-color: $chart-color4;
}
.bar4 {
  background-color: $chart-color5;
}
</style>
