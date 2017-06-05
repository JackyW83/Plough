import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import userList from '../components/user/UserList'
import segment from '../components/user/Segment'
import segmentDetail from '../components/user/SegmentDetail'
import segmentList from '../components/user/SegmentList'
import userDetail from '../components/user/UserDetail'
import heatMap from '../components/heatMap/Index'
import funnel from '../components/funnel/Index'
import funndelDetail from '../components/funnel/Detail'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index'
    },
    {
      path: '/heat',
      name: 'heat',
      component: heatMap
    },
    {
      path: '/funnel',
      name: 'funnel',
      component: funnel,
      children: [
        {
          path: ':name',
          name: 'funnelDetail',
          component: funndelDetail
        }
      ]
    },
    {
      path: '/segments',
      name: 'segments',
      component: segment,
      children: [
        {
          path: 'add',
          name: 'newSegment',
          component: segmentList
        },
        {
          path: ':name',
          name: 'segmentDetail',
          component: segmentDetail,
          children: [
            {
              path: 'list',
              name: 'userList',
              component: userList
            },
            {
              path: ':id',
              name: 'userDetail',
              component: userDetail
            }
          ]
        }
      ]
    }
  ]
})
