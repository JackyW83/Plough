<template>
<optgroup v-bind:label="option.name">
      <option v-for="d in option.subDimensions">
         {{d.name}}
     </option>
  </optgroup> 
 
</template>

<script>
export default {
  props: ['option']
}
</script>
