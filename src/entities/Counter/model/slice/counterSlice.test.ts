import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('increment reducer', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment))
      .toEqual({ value: 11 });
  });

  test('decrement reducer', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement))
      .toEqual({ value: 9 });
  });

  test('increment reducer with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment))
      .toEqual({ value: 1 });
  });

  test('decrement reducer with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement))
      .toEqual({ value: -1 });
  });
});
