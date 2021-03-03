export const actions = {
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
    const found = state.products.find(({ id }) => id === product.id);
    if (!found) {
      return;
    }

    if (found.quantity - 1 <= 0) {
      commit('remove', {
        id: found.id,
      });
    } else {
      commit('decrease', {
        id: found.id,
      });
    }

    commit('product/increaseInventory', {
      id: found.id,
    }, {
      root: true,
    });
  },
};

export const mutations = {
  push({ products }, { id }) {
    products.push({
      id,
      quantity: 1,
    });
  },
  remove({ products }, { id }) {
    const i = products.findIndex((product) => product.id === id);
    if (i === -1) {
      return;
    }
    products.splice(i, 1);
  },
  increase({ products }, { id }) {
    const found = products.find((product) => product.id === id);
    found.quantity++;
  },
  decrease({ products }, { id }) {
    const found = products.find((product) => product.id === id);
    if (found.quantity - 1 < 0) {
      return;
    }
    found.quantity--;
  },
};

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  actions,
  mutations,
};
