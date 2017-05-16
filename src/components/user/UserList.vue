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
export default {
  data () {
    return {
      users: null
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      if (this.$route.params.segment) {
        this.users = this.$route.params.segment.users
      }
    }
  }
}
</script>
