
import {addExpense,removeExpense,editExpense} from '../actions/expenses.js';
import {setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount} from '../actions/filters.js';

import {getVisibleExpenses} from '../selectors/getVisibleExpenses';
import {store} from '../store/configureStore';
//import {getVisibleExpenses} from '../selector'



store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
    //console.log(store.getState()); 

})
const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-1000}));
const expensetwo=store.dispatch(addExpense({description:'rent2',amount:300,createdAt:1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expensetwo.expense.id,{amount:500}))

//store.dispatch(setTextFilter('rent'));
 store.dispatch(sortByAmount());//amount
store.dispatch(sortByDate());//date
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState ={
    expenses:[{
        id:'poijwasftwer',
        description:'January Rent',
        note:'This was the final amount',
        amount:54500,
        createdAt:0
    }],

    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

