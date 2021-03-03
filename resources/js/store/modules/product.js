export const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  increaseInventory(state, { id }) {
    const found = state.all.find((product) => product.id === id);
    if (!found) {
      return;
    }

    found.inventory++;
  },
  decreaseInventory(state, { id }) {
    const found = state.all.find((product) => product.id === id);
    if (!found) {
      return;
    }
    if (found.inventory <= 0) {
      return;
    }

    found.inventory--;
  },
};

export default {
  namespaced: true,
  state() {
    return {
      all: [],
    };
  },
  mutations,
};
