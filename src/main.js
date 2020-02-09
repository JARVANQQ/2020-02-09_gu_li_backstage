import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from 'ant-design-vue';

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render: h =>h(App),
  // router,
})
