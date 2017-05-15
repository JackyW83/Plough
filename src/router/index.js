import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import userList from '../components/user/UserList'
import segment from '../components/user/Segment'
import segmentDetail from '../components/user/SegmentDetail'
import segmentList from '../components/user/SegmentList'
// import userDetail from '../components/user/userDetail'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index'
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
              path: 'users',
              name: 'userList',
              component: userList
            }
          ]
        }
      ]
    }
  ]
})
