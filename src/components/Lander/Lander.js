import Vue from 'vue'
import template from './Lander.pug';
require('./Lander.styl');

export default Vue.component('Lander', {
  template: template,
  data () {
    return {
      msg: 'STevens kings'
    }
  }
})
