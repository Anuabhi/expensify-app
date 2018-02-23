import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';



const ExpenseDashboardPage =() =>(
    <div>
    This is from my Dashboard components
    

    <ExpenseListFilters />


    <ExpenseList />
    
    </div>

);

export default ExpenseDashboardPage;