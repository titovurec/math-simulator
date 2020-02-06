<template>
  <div class="alert">
     <h3>{{ x }}+{{ y }}=?</h3>
<hr>
<div class="buttons">
  <button class="btn btn-success" v-for-key="number in answers" @click="onAnswer(number)">{{ number }}</button>
</div>
 </div>

</template>

<script>
export default {
  data() {
    return{
      x:mtRand(1,100),
      y:mtRand(1,100)
    }
  } ,
  computed:{
              good(){
                return this.x + this.y;
              },
              answer(){
                let res=[this.good];
                while(res.length < 5){ 
                                        let num = mtRand(this.good -20,this.good +20);
                                        if(res.indexOf(num) === -1){res.push(num);}
                                      }
                return res.sort(function(){
                  return Math.random()>0.5;
                });
              }
            },
  methods:{
             onAnswer(num){
                             if (num == this.good){this.$emit('success');} else { this.$emit('error'); }
                          }
         }
}
function mtRand(min,max){
  let diff = max - min;
  return Math.floor(Math.random()*(diff +1)) + min;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  padding-top: 20px;
  background-color: lavenderblush;
}
.btn{
  margin: 20px 0;
}
.buttons{
  display: flex;
  justify-content: space-around;
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
