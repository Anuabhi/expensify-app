import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/getVisibleExpenses';
import {store} from './store/configureStore';
import {addExpense,removeExpense,editExpense} from './actions/expenses';
import {setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount} from './actions/filters.js';
import 'react-dates/lib/css/_datepicker.css';

//import {setTextfilter, setTextFilter} from './actions/filters';


const configureStore=store;
// store.subscribe(()=>{
//     const state=store.getState();
//     const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
//     console.log(visibleExpenses);
//     //console.log(store.getState()); 

// });
// store.dispatch(setTextFilter('rent'))

// setTimeout(()=>{
//     store.dispatch(setTextFilter('water'));
// },3000)
//console.log(configureStore.getState());
// const expenseOne=store.dispatch(addExpense({description:'Water Bill',amount:100,createdAt:300}));
// const expensetwo=store.dispatch(addExpense({description:'Electricity Bill',amount:300,createdAt:1000}));
// const expensethree=store.dispatch(addExpense({description:'Gas Bill',amount:800,createdAt:500}));
// store.dispatch(setTextFilter('water'));

const jsx =(
    <Provider store={store}>
    <AppRouter />

    </Provider>
)
   

ReactDOM.render(jsx,document.getElementById('app'));






