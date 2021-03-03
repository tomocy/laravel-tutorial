import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './components/Counter.vue';
import ThePagePosts from './components/ThePagePosts.vue';
import ThePagePost from './components/ThePagePost.vue';

import './bootstrap';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  components: {
    Counter,
    ThePagePosts,
    ThePagePost,
  },
});
