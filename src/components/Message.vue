<template>
  <div class="alert" :class="'alert-'+type">
   
    <button class="btn btn-primary" @click="$emit('onNext')"> Continue </button>
  </div>
</template>

<script>
export default {
  props:['type','text']
  
}
</script>


<style scoped>
.alert {
   text-align: center;
  padding-top: 20px;
  background-color: lavenderblush;
}
.btn{
  margin: 20px 0;
}
</style>
