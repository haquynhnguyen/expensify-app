import { createStore } from 'redux';

// create store => state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count -1
      }
    case 'RESET':
      return {
        count : 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default: 
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
}); // this function will be called every single time it changed

//Actions: an object to gets sent to the store
// increment ; decremet ; reset
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
}); 

// unsubscribe();

store.dispatch({
  type: 'INCREMENT'
}); 

//RESET - set the count equal to zero
store.dispatch({
  type: 'RESET'
});


store.dispatch({
  type: 'DECREMENT'
}); 

store.dispatch({
  type: 'SET',
  count: 101
});