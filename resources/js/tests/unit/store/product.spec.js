import { mutations } from '../../../store/modules/product';

describe('product', () => {
  it('sets products', () => {
    const state = {
      all: [],
    };

    const { setProducts } = mutations;

    setProducts(state, [
      { id: 1 }, { id: 2 }, { id: 3 },
    ]);
    expect(state.all).toStrictEqual([
      { id: 1 }, { id: 2 }, { id: 3 },
    ]);
  });

  it('increases the inventory of a product when it has the one', () => {
    const state = {
      all: [
        {
          id: 1,
          inventory: 1,
        },
        {
          id: 2,
          inventory: 1,
        },
      ],
    };

    const { increaseInventory } = mutations;

    increaseInventory(state, {
      id: 1,
    });
    expect(state.all).toHaveLength(2);
    expect(state.all[0]).toStrictEqual({
      id: 1,
      inventory: 2,
    });
    expect(state.all[1]).toStrictEqual({
      id: 2,
      inventory: 1,
    });
  });

  it('does not increases the inventory of a product when it does not have the one', () => {
    const state = {
      all: [
        {
          id: 1,
          inventory: 1,
        },
        {
          id: 2,
          inventory: 1,
        },
      ],
    };

    const { increaseInventory } = mutations;

    increaseInventory(state, {
      id: 3,
    });
    expect(state.all).toHaveLength(2);
    expect(state.all[0]).toStrictEqual({
      id: 1,
      inventory: 1,
    });
    expect(state.all[1]).toStrictEqual({
      id: 2,
      inventory: 1,
    });
  });

  it('decreases the inventory of a product when it has the one', () => {
    const state = {
      all: [
        {
          id: 1,
          inventory: 1,
        },
        {
          id: 2,
          inventory: 1,
        },
      ],
    };

    const { decreaseInventory } = mutations;

    decreaseInventory(state, {
      id: 1,
    });
    expect(state.all).toHaveLength(2);
    expect(state.all[0]).toStrictEqual({
      id: 1,
      inventory: 0,
    });
    expect(state.all[1]).toStrictEqual({
      id: 2,
      inventory: 1,
    });
  });

  it('does not decreases the inventory of a product when it does not have the one anymore', () => {
    const state = {
      all: [
        {
          id: 1,
          inventory: 0,
        },
        {
          id: 2,
          inventory: 1,
        },
      ],
    };

    const { decreaseInventory } = mutations;

    decreaseInventory(state, {
      id: 1,
    });
    expect(state.all).toHaveLength(2);
    expect(state.all[0]).toStrictEqual({
      id: 1,
      inventory: 0,
    });
    expect(state.all[1]).toStrictEqual({
      id: 2,
      inventory: 1,
    });
  });

  it('does not decreases the inventory of a product when it does not have the one', () => {
    const state = {
      all: [
        {
          id: 1,
          inventory: 1,
        },
        {
          id: 2,
          inventory: 1,
        },
      ],
    };

    const { decreaseInventory } = mutations;

    decreaseInventory(state, {
      id: 3,
    });
    expect(state.all).toHaveLength(2);
    expect(state.all[0]).toStrictEqual({
      id: 1,
      inventory: 1,
    });
    expect(state.all[1]).toStrictEqual({
      id: 2,
      inventory: 1,
    });
  });
});
