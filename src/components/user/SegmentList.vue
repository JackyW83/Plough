<template>
<div class="main left">
        <div class="section">
            <h1>Basic </h1>
            <p><input placeholder="name" /> </p>
            <p><textarea placeholder="description" cols="50" /> </p>
        </div>

        <div v-for="s in editingSegments" class="section">
            <p>Dimension </p>
            <p>
               <select v-model="s.dimension">
                 <segment-option v-bind:option="dim" v-for="dim in dimensions" />
               </select>

               <select v-model="s.operator">
                <option> contains </option>
                <option> equal </option>
                <option> greater </option>
                <option> less </option>
                <option> not equal </option> 
               </select> 
               <input v-model="s.val" class="short" />
            </p>
        </div>
        <button @click="newDimension"> Add Dimension </button>
      </div>
</template>
<script>
import segmentOption from './SegmentOption'
export default {
  components: {
    'segment-option': segmentOption
  },
  data () {
    return {
      segments: [
          { id: 1, name: 'new register users in 7 days' },
          { id: 2, name: 'top 20% sales customer' },
          { id: 3, name: 'top 20% sales mobile customer ' },
          { id: 4, name: 'top 20% visit users' },
          { id: 5, name: 'IE users' }
      ],
      dimensions: [
         { name: 'geographic', subDimensions: [{ name: 'location' }, { name: 'language' }] },
         { name: 'psychographic', subDimensions: [{ name: 'device' }, { name: 'browser' }, { name: 'OS' }, { name: 'network' }] }
      ],
      editingSegments: [
         { dimension: null, operator: null, val: null }
      ]
    }
  },
  methods: {
    newDimension () {
      this.editingSegments.push({ dimension: null, operator: null, val: null })
    }
  }
}
</script>
<style lang="scss">
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
.segments {
    list-style: decimal;
    margin-left: 30px;
    li{
        margin: 20px 0px;
        cursor: pointer;
    }
    
}
</style>
