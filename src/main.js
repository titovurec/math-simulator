// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'


import AppMessage from './components/Message.vue';
import AppQustion from './components/Qustion.vue';
import AppStartScreen from './components/StartScreen.vue';
import AppResultScreen from './components/ResultScreen.vue';



Vue.component('AppMessage', AppMessage);
Vue.component('AppQustion', AppQustion);
Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppResultScreen', AppResultScreen);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  render: h => h(App)
})
