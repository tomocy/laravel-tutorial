export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  actions: {
    add({ state, commit }, { product }) {
      if (product.inventory <= 0) {
        return;
      }

      if (state.products.some(({ id }) => id === product.id)) {
        commit('increase', {
          id: product.id,
        });
      } else {
        commit('push', {
          id: product.id,
        });
      }

      commit('product/decreaseInventory', {
        id: product.id,
      }, {
        root: true,
      });
    },
    remove({ state, commit }, { product }) {
      if (!state.products.some(({ id }) => id === product.id)) {
        return;
      }

      if (product.quantity - 1 <= 0) {
        commit('remove', {
          id: product.id,
        });
      } else {
        commit('decrease', {
          id: product.id,
        });
      }

      commit('product/increaseInventory', {
        id: product.id,
      }, {
        root: true,
      });
    },
  },
  mutations: {
    push({ products }, { id }) {
      products.push({
        id,
        quantity: 1,
      });
    },
    remove({ products }, { id }) {
      const i = products.findIndex((product) => product.id === id);
      products.splice(i, 1);
    },
    increase({ products }, { id }) {
      const found = products.find((product) => product.id === id);
      found.quantity++;
    },
    decrease({ products }, { id }) {
      const found = products.find((product) => product.id === id);
      found.quantity--;
    },
  },
};
