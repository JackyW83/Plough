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
        <a @click="goto(u.id)" v-bind:href="u.id" >{{u.id}}</a>
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
import userDetail from './UserDetail'
export default {
  components: {
    'user-detail': userDetail
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    goto (id) {
      this.$router.push({ name: 'userDetail', params: { id: id } })
    },
    fetchData () {
      console.log(1)
      return this.$route.params.segment
    }
  }
}
</script>
