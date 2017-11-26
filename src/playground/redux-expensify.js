import { createStore, combineReducers } from 'redux';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

//Store Creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'dshkdas',
    description: 'January Rent',
    note: 'this is my note',
    amount:54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  } 
}