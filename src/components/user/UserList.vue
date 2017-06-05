<template>
   <table>
 <thead>
    <tr>
        <td>
          User ID
        </td>
        <td>
          Last 30 days visit count
        </td>
         <td>
          Last visit location
        </td>
         <td>
          Last visit time
        </td>
    </tr>
 </thead>
 <tbody>
 <tr v-for="u in users">
        <td>
        <router-link :to=" { name: 'userDetail', params: {id: u.id} }">
          {{u.id}}
        </router-link> 
        </td>
        <td>
          {{u.count}}
        </td>
         <td>
          {{u.location}}
        </td>
         <td>
          {{u.date.toDateString()}}
        </td>
    </tr>
 </tbody>
</table> 
</template>

<script>
var faker = require('faker')
import random from '../../utlis/Random'
export default {
  data () {
    return {
      users: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fullUsers()
  },
  methods: {
    fetchData () {
      if (this.$route.params.segment) {
        this.users = this.$route.params.segment.users
        this.fullUsers()
      }
    },
    fullUsers () {
      for (var i = 0; i < 50; i++) {
        this.users.push(
          {
            id: faker.random.uuid(),
            count: random(1, 100),
            location: faker.address.city(),
            date: faker.date.past()
          })
      }
    }
  }
}
</script>
