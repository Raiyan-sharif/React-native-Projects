import { createStore } from 'redux';

export interface AppState {
  counter: number;
}

const initialState: AppState = { counter: 0 };

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

function rootReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT': return { ...state, counter: state.counter + 1 };
    case 'DECREMENT': return { ...state, counter: state.counter - 1 };
    default: return state;
  }
}

const store = createStore(rootReducer);
export default store;
