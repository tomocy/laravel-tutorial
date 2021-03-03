import Vue from 'vue';
import Counter from './components/Counter.vue';
import ThePagePosts from './components/ThePagePosts.vue';
import ThePagePost from './components/ThePagePost.vue';
import CartItem from './components/CartItem.vue';
import ListProduct from './components/ListProduct.vue';

import store from './store';

import './bootstrap';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  components: {
    Counter,
    ThePagePosts,
    ThePagePost,
    CartItem,
    ListProduct,
  },
});
