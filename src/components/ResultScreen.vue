<template>
  <div class="alert alert-primary">
    <h3>Success:{{stats.success}}</h3>
    <h3>Erors:{{stats.errors}}</h3>
    <hr>
    <button class="btn btn-primary"  @click="$emit('repeat')">Repeat</button>
    <button class="btn btn-primary"  @click="$emit('nextLevel')">Next Level</button>
  </div>
</template>

<script>
export default {
  props:['stats']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
