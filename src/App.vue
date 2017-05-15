<template>
  <div id="app">
     <app-header />
		 <transition name="slide-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import header from './components/header/Index'
import userSegment from './components/user/Segment'
export default {
  name: 'app',
  components: {
    'app-header': header,
    'user-segment': userSegment
  },
  data () {
    return {
      component: 'user-segment'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tfoot, 
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.left {
	float: left;
}
.left::after {
	content: '';
	display: block;
	clear: both;
}
input, textarea, select {
  border-radius: 5px;
  padding:8px;
  border: 1px #aaa solid;
}
button {
  padding:8px;
}
input.short {
  width:80px;
}
h1 {
  margin: 5px 0px;
}
table td, table th {
    border: 1px solid #cbcbcb;
  
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}
thead{
     background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
