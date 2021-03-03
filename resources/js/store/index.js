import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger';

import cart from './modules/cart';
import product from './modules/product';

Vue.use(Vuex);

const isDebug = process.env.NODE_ENV !== 'production';

export const state = () => ({ count: 0 });

export const mutations = {
  increment: (s) => s.count++,
  decrement: (s) => s.count--,
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    cart,
    product,
  },
  strict: isDebug,
  plugins: isDebug ? [createLogger()] : [],
});
