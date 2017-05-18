<template>
<div class="container">
    <div class="left">
        <h2>Existing segments</h2>
        <ol class="segments">
            <li v-for="s in segments" > 
             <router-link v-bind:to="{ name: 'userList',  params: { segment: s, name: s.name.toLowerCase().split(' ').join('-') } }" >
              {{s.name}}
            </router-link >
           </li>
        </ol>
        <router-link :to="'/segments/add'">+ New Segment</router-link>
      </div> 
     <div class="left" style="width:65%">
        <transition name="fade">
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
            </transition>
    </div>
   </div>
</template>

<script>
import segmentList from './SegmentList'
import segmentDetail from './SegmentDetail'
export default {
  components: {
    'segment-list': segmentList,
    'segment-detail': segmentDetail
  },
  props: ['segments'],
  data () {
    return {
      view: 'segment-list',
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
