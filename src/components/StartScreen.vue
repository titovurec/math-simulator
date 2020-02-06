<template>
  <div class="alert alert-secondary">
     <h3>Are you ready?</h3>
     <button class="btn btn-success" @click="$emit('onStart')">Start</button>
  
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  text-align: center;
}
h3, .btn {
  margin: 40px 0 0;
  color: #42b983;
}

</style>
