<template>
<div class="container">
    <div class="left">
        <h1>Existing segments</h1>
        <ol class="segments">
            <li v-for="s in segments" > 
             <router-link v-bind:to="{ path: '/segments/' + s.name.toLowerCase().split(' ').join('-'), name: 'segmentDetail', params: { segment: s } }" >
              {{s.name}}
            </router-link >
           </li>
        </ol>
        <router-link :to="'/segments/add'">+ New Segment</router-link>
      </div> 
        <transition>
      <keep-alive name="slide-fade">
        <router-view></router-view>
      </keep-alive>
    </transition>
   </div>
</template>

<script>
import segmentList from './SegmentList'
import segmentDetail from './SegmentDetail'
var faker = require('faker')
export default {
  components: {
    'segment-list': segmentList,
    'segment-detail': segmentDetail
  },
  data () {
    return {
      view: 'segment-list',
      segments: [
          { id: 1, name: 'new register users in 7 days', users: [], dimensions: [{ dimension: 'register date', operator: 'less', val: '7' }] },
          { id: 2, name: 'top 20pct sales customer', users: [] },
          { id: 3, name: 'top 20pct sales mobile customer', users: [] },
          { id: 4, name: 'top 20pct visit users', users: [] },
          { id: 5, name: 'IE users', users: [] }
      ],
      dimensions: [
         { name: 'geographic', subDimensions: [{ name: 'location' }, { name: 'language' }] },
         { name: 'psychographic', subDimensions: [{ name: 'device' }, { name: 'browser' }, { name: 'OS' }, { name: 'network' }] }
      ],
      editingSegments: [
         { dimension: null, operator: null, val: null }
      ],
      selectedSegment: null
    }
  },
  created () {
    this.segments.forEach(s => {
      for (var i = 0; i < 50; i++) {
        s.users.push(
          {
            id: faker.random.uuid(),
            count: faker.random.number(),
            location: faker.address.city(),
            date: faker.date.past()
          })
      }
    })
  },
  methods: {
    detail (segment) {
      this.view = 'segment-detail'
      this.selectedSegment = segment
    }
  }
}
</script>

<style lang="scss">
.container {
    margin:50px 20px;
    width: 100%;
    z-index: 99;
    text-align: left;
    .left {
        width: 30%;
    }
    .main {
        width: 65%;
        vertical-align: bottom;
    }
    .section {
        background-color:#eee;
        border-radius:5px;
        border: 1px #aaa solid;
        padding:1em;
        p {
            margin-bottom:10px;
        } 
        margin-bottom:10px;
    }
}
.segments {
    list-style: decimal;
    margin-left: 30px;
    li{
        margin: 20px 0px;
        cursor: pointer;
    }
    
}
</style>
