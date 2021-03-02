import Vue from 'vue';
import Alert from './Alert.vue';

require('./bootstrap');

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { Alert },
});
