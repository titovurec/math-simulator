<template>
 <div class="training">
  <h1>Тренажёр 'Обучение математике' </h1>
  <p> Math training</p>

  <hr>

<div class="progress"><div class="progress-bar" :style="progressStyles"></div></div>

        <div class="box">
                <!-- <transition name="flip" mode="out-in">-->
                <app-start-screen v-if="state == 'start'" @onStart="onStart"></app-start-screen> <!-- v-if="state == 'start'" @onStart="onStart" -->
                <app-qustion v-else-if="state == 'question'" @success="onQuestSuccess" @error="onQuestErrors" ></app-qustion><!-- v-else-if="state == 'question'" @success="onQuestSuccess" @error="onQuestErrors" -->
                <app-message  v-else-if="state == 'message'"   :type="message.type"  :text="message.text"  @onNext="onNext"  ></app-message><!--     v-else-if="state == 'message'"   :type="message.type"  :text="message.text"  @onNext="onNext"      -->
                <app-result-screen  v-else-if="state =='result'" :stats="stats" @repeat="onStart" ></app-result-screen><!--v-else-if="state =='result'" -->
                <div  v-else >Unknown state</div><!-- v-else -->
                 <!--</transition>-->
                 
        </div>
</div>
</template>

<script>



export default {
  date(){
      return {
      state:'start',
      
      stats:{success:0,error:0},
      message:{type:'',text:''},
      questMax:3
}

},
computed:{
             questDone(){
               return this.stats.success + this.stats.error;
             },
             progressStyles(){
               return {
                 width:(this.questDone/this.questMax*100)+'%'
               };
             }
          },
methods:{
                      onStart(){
                      this.state='question';
                      this.stats.success = 0;
                      this.stats.errors = 0;
                      }, 
                      onQuestSuccess(){
                                           this.state='message';
                                            this.message.text ='Good job!';
                                           this.message.type ='success';
                                           this.stats.success++;
                                        },
                       onQuestErrors(msg){
                                     this.state='message';
                                     this.message.text = msg;
                                     this.message.type ='warning';
                                     this.stats.error++;

                      },onNext(){
                        if(this.questDone<this.questMax){
                          this.state='question';
                        } else {
                          this.state='result';}
                      }
            }
  }

</script>

<style  scoped>
.training{
  max-width: 700px;
  margin: 20px auto;
  background-color: #2c3e50;
 text-align: center;
  
  margin-top: 60px;
}
.progress-bar{
  transition: width 0.5s;
}

.box{
  margin: 10px 0;
}
.flip-enter{

}
.flip-enter-active{
  animation: flipInX 0.3s linear;
}
.flip-leave{
  
}
.flip-leave-active{
  animation: flipOutX 0.3s linear;
  
}
@keyframes flipInX{
  from{transform: rotateX(90deg);}
   to{transform: rotateX(0deg);}

}
@keyframes flipOutX{
  from{transform: rotateX(0deg);}
   to{transform: rotateX(90deg);}

}



</style>
