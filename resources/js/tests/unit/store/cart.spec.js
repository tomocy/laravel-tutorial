import { actions, mutations } from '../../../store/modules/cart';

describe('cart', () => {
  it('pushes a product when it does not have the one', () => {
    const state = {
      products: [],
    };
    const commit = jest.fn();

    const { add } = actions;

    add({ state, commit }, {
      product: {
        id: 1,
        inventory: 1,
      },
    });

    expect(commit).toHaveBeenNthCalledWith(1, 'push', { id: 1 });
    expect(commit).toHaveBeenNthCalledWith(2, 'product/decreaseInventory', { id: 1 }, { root: true });
  });

  it('increases the quantity of a product when it has the one', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    };
    const commit = jest.fn();

    const { add } = actions;

    add({ state, commit }, {
      product: {
        id: 1,
        inventory: 1,
      },
    });

    expect(commit).toHaveBeenNthCalledWith(1, 'increase', { id: 1 });
    expect(commit).toHaveBeenNthCalledWith(2, 'product/decreaseInventory', { id: 1 }, { root: true });
  });

  it('does not add a product which is out of stock', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    };
    const commit = jest.fn();

    const { add } = actions;

    add({ state, commit }, {
      product: {
        id: 1,
        inventory: 0,
      },
    });

    expect(commit).not.toHaveBeenCalled();
  });

  it('removes a product when it does not have the one anymore', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
      ],
    };
    const commit = jest.fn();

    const { remove } = actions;

    remove({ state, commit }, {
      product: {
        id: 1,
      },
    });

    expect(commit).toHaveBeenNthCalledWith(1, 'remove', { id: 1 });
    expect(commit).toHaveBeenNthCalledWith(2, 'product/increaseInventory', { id: 1 }, { root: true });
  });

  it('decreases the quantity of a product when it stil has the one', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    };
    const commit = jest.fn();

    const { remove } = actions;

    remove({ state, commit }, {
      product: {
        id: 1,
      },
    });

    expect(commit).toHaveBeenNthCalledWith(1, 'decrease', { id: 1 });
    expect(commit).toHaveBeenNthCalledWith(2, 'product/increaseInventory', { id: 1 }, { root: true });
  });

  it('does nothing when it does not have the product', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    };
    const commit = jest.fn();

    const { remove } = actions;

    remove({ state, commit }, {
      product: {
        id: 2,
      },
    });

    expect(commit).not.toHaveBeenCalled();
  });

  it('pushes a product', () => {
    const state = { products: [] };
    const { push } = mutations;

    push(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toStrictEqual({
      id: 1,
      quantity: 1,
    });

    push(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[1]).toStrictEqual({
      id: 1,
      quantity: 1,
    });

    push(state, {
      id: 2,
    });
    expect(state.products).toHaveLength(3);
    expect(state.products[2]).toStrictEqual({
      id: 2,
      quantity: 1,
    });
  });

  it('removes a product', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    };
    const { remove } = mutations;

    remove(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(1);

    remove(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(1);
  });

  it('increases the quantity of a product', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    };
    const { increase } = mutations;

    increase(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0].quantity).toBe(2);
    expect(state.products[1].quantity).toBe(1);

    increase(state, {
      id: 2,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0].quantity).toBe(2);
    expect(state.products[1].quantity).toBe(2);
  });

  it('decreases the quantity of a product', () => {
    const state = {
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    };
    const { decrease } = mutations;

    decrease(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0].quantity).toBe(0);
    expect(state.products[1].quantity).toBe(1);

    decrease(state, {
      id: 2,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0].quantity).toBe(0);
    expect(state.products[1].quantity).toBe(0);

    decrease(state, {
      id: 1,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0].quantity).toBe(0);
    expect(state.products[1].quantity).toBe(0);
  });
});
