import { createStore } from 'redux';

// Action generation//
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1,
  incrementBy
})

const decremetCount = ({decremetBy = 1} = {}) => ({
  type: 'DECREMENT',
  decremetBy
})

//Set Count
const setCount = ({count = 1}) => ({
  type: 'SET',
  count
});


//reset count
const reset = () => ({
  type: 'RESET'
});

// create store => state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count - action.decremetBy
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
store.dispatch(incrementCount({incrementBy: 5}));

// unsubscribe();

store.dispatch(incrementCount()); 

//RESET - set the count equal to zero
store.dispatch(reset());


store.dispatch(decremetCount()); 
store.dispatch(decremetCount({decremetBy: 10}));

store.dispatch(setCount({count: 101}));