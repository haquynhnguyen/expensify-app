import { createStore, combineReducers } from 'redux';

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