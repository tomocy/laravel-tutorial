import { mutations } from '../../../store';

describe('counter', () => {
  it('increments its count', () => {
    const state = { count: -1 };
    const { increment } = mutations;

    increment(state);
    expect(state.count).toBe(0);

    increment(state);
    expect(state.count).toBe(1);
  });

  it('decrements its count', () => {
    const state = { count: 1 };
    const { decrement } = mutations;

    decrement(state);
    expect(state.count).toBe(0);

    decrement(state);
    expect(state.count).toBe(-1);
  });
});
