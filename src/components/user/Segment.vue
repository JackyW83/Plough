<template>
<div class="container">
    <div class="left">
        <h1>Existing segments</h1>
        <ol class="segments">
            <li v-for="s in segments" > {{s.name}} </li>
        </ol>
        <a href="#">+ New Segment </a>
      </div>
      <div class="main left">
        this is placeholder for create new segment
      </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      segments: [
          { id: 1, name: 'new register users in 7 days' },
          { id: 2, name: 'top 20% sales customer' },
          { id: 3, name: 'top 20% sales mobile customer ' },
          { id: 4, name: 'top 20% visit users' },
          { id: 5, name: 'IE users' }
      ]
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
