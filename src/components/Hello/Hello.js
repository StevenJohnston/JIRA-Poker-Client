import Vue from 'vue'
import template from './Hello.pug';
require('./Hello.styl');

export default Vue.component('Hello', {
  template: template,
  data () {
    return {
      msg: 'STevens kings'
    }
  }
})
