import Vue from 'vue';
import ThePagePosts from './components/ThePagePosts.vue';
import ThePagePost from './components/ThePagePost.vue';

import './bootstrap';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    ThePagePosts,
    ThePagePost,
  },
});
