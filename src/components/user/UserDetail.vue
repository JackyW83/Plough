<template>
 <div class="user-detail" style="margin-top:10px">
    <div class="float" style="width:60%"> 
    <h2>
       <select @change="refeshChart()"> 
        <option>2016/01/04 - 2016/06/04</option> 
          <option>2016/06/04 - 2016/12/04</option> 
          <option>2017/02/04 - 2017/06/04</option> 
        </select > 
      </h2>
      <p style="text-align:center">user events</p>
       <div style="position:relative">
        <canvas  id="chart" width="600px" height="300px"></canvas>
        <canvas style="position:absolute; left:0; top:0;" @mousedown="beginDrawingRect" @mouseup="endDrawingRect" @mousemove="drawingRect" id="operation" width="600px" height="300px"></canvas>
        <ul>
          <li v-for="d in dates"> {{d.getFullYear()}} / {{d.getMonth() + 1}} / {{d.getDate()}}</li>
        </ul>
      </div> 
      </div>
    <div class="float" style="width:35%; float:right; max-width:380px;">
      <h2>
        user detail
      </h2>
      <table>
         <tr v-for="p in properties">
          <td style="padding: .5em; border-bottom: 1px #ddd dashed;">{{p.name}}</td>
          <td style="padding: .5em; border-bottom: 1px #ddd dashed; font-family: open-sans-bold">{{p.value}}</td>
         </tr>
         <tr>
          <td colspan="2">
            user interactivity summary prior to purchase
          </td> 
         </tr>
      </table>
    </div>

     <div class="float" style="width:60%">
      <h2>
        user interactivity detail
      </h2>
      <table>
       <tr>
          <td>
             <div class="cycle">begin </div>
          </td>
        </tr>
        <tr>
          <td>
           <div class="rect">page open </div>
          </td>
          <td>
             user open <a href="#">home page </a> 
          </td>
          <td>
             14:05:02
          </td>
        </tr>
       
        <tr>
          <td>
           <div class="rect">page loaded </div>
          </td>
          <td>
             all resources been loaded
          </td>
          <td>
             14:05:30
          </td>
        </tr>
        
         <tr>
          <td>
           <div class="rect">click event </div>
          </td>
          <td>
             user click <a href="#" > product detail </a> page
          </td>
          <td>
             14:06:10
          </td>
        </tr>

         <tr>
          <td>
           <div class="rect"> scroll page </div>
          </td>
          <td>
             user scroll the page from 0 to 100px
          </td>
          <td>
             14:06:42
          </td>
        </tr>
        <tr>
          <td>
           <div class="rect"> click event </div>
          </td>
          <td>
                <div class="interactivity-container">user click <a href="#" @mouseover="imageShow = true" @mouseout="imageShow = false"> product03_01.png </a>  image
                   <img v-show="imageShow" src="../../assets/product03_1.png">
                </div>
          </td>
          <td>
             14:07:01
          </td>
        </tr>
         <tr>
          <td>
           <div class="rect"> click event </div>
          </td>
          <td>
             user click [add to cart] button
          </td>
          <td>
             14:08:42
          </td>
        </tr>
        <tr>
          <td>
           <div class="rect"> input event </div>
          </td>
          <td>
             user input [3] in quantity input
          </td>
          <td>
             14:09:42
          </td>
        </tr>
         <tr>
          <td>
           <div class="rect"> click event </div>
          </td>
          <td>
             user click [check out] button
          </td>
          <td>
             14:10:32
          </td>
        </tr>

         <tr>
          <td>
             <div class="cycle">end </div>
          </td>
        </tr>
       
      </table>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      imageShow: false,
      layerX: null,
      layerY: null,
      properties: [
        {name: 'Location', value: 'Shanghai, China'},
        {name: 'Last access device', value: 'Mobile'},
        {name: 'Total visit in recent 30 days', value: 120},
        {name: 'Last access time', value: '2017/05/12 12:32'},
        {name: 'Last session duration', value: '12 min 30 sec'},
        {name: 'Page Loaded time', value: '10 sec'},
        {name: 'Active Time', value: '5 min 23 sec'},
        {name: 'Time spending on Check out', value: '3 min 30 sec'},
        {name: 'Came from', value: 'baidu.com'},
        {name: 'Bounce to', value: 'linkin.com'}
      ]
    }
  },
  computed: {
    dates: () => {
      var d = new Date()
      var arr = []
      for (var i = 9; i > 0; i--) {
        arr.push(new Date(d.getTime() - 1000 * 60 * 60 * 24 * i))
      }
      arr.push(d)
      return arr
    }
  },
  mounted () {
    this.refeshChart()
  },
  methods: {
    random (max) {
      return Math.floor(Math.random() * (max - 10)) + 10
    },
    refeshChart () {
      var canvas = document.getElementById('chart')
      var ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      var gap = canvas.height / 4
      var gutter = canvas.width / 10
      ctx.fillStyle = '#DAEAEF'
      for (var i = 0; i < 4; i++) {
        ctx.fillRect(0, gap * (i + 1), canvas.width, 1)
      }
      ctx.fillRect(0, canvas.height - 1, canvas.width, 1)
      // ctx.fillStyle = '#272F32'
      // var text = ctx.measureText('foo')
      // ctx.fillText('user events', (canvas.width / 2 - (text.width / 2)), 50)
      for (var l = 0; l < 4; l++) {
        ctx.fillText((300 - (l * 100)), 0, gap * (l + 1))
      }
      ctx.fillStyle = '#9DBDC6'
      for (var j = 0; j < 10; j++) {
        ctx.fillRect((gutter * j) + (gutter / 2 - 10), this.random(canvas.height), 20, canvas.height)
      }
    },
    drawingRect (event) {
      if (this.layerX && this.layerY) {
        var canvas = document.getElementById('operation')
        var ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(157, 189, 198, .4)'
        var x = event.layerX - this.layerX
        var y = event.layerY - this.layerY
        ctx.fillRect(this.layerX, this.layerY, x, y)
      }
    },
    beginDrawingRect (event) {
      this.layerX = event.layerX
      this.layerY = event.layerY
    },
    endDrawingRect (event) {
      this.layerX = null
      this.layerY = null
    }
  }
}
</script>
<style lang="scss">
@import  '../../styles/var.scss';
  .float {
    float: left;
  }
  .float::after {
    content: '';
    clear: both;
  }
  .user-detail {
    table tr td {
      border: 0px;
      font-size: .9em;
    }
    ul li {
      display:inline-block;
      transform: rotateZ(-40deg);
      font-size:9px;
      margin:15px 0px;
      width:10%;
      margin-bottom:40px;
    }
    .cycle {
      line-height: 4em;
      border-radius: 50%;
      background-color: $important-color;
      color: $font-color-in-main;
      text-align: center;
      width:4em;
      height: 4em; 
    }
    .rect {
      border-radius: 5px;
      background-color: $important-color;
      color: $font-color-in-main;
      text-align: center;
      padding: 5px;
      display: inline-block;
    }
    .interactivity-container {
      position: relative;
      img {
        position: absolute;
        left: 40%;
        top: 20px;
      }
    }
  }
</style>
