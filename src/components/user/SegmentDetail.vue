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
 <tr v-for="u in segment.users">
        <td>
        {{u.id}}
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
  props: ['segment']
}
</script>
