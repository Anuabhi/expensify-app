import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import { NavLink } from 'react-router-dom';

const ExpenseListItem =({id,description,amount,createdAt}) =>(
    <div>
    <NavLink to={`/edit/${id}`}>{description}</NavLink>
    <p>{amount}</p>
    <p>{createdAt}</p>
    
    </div>
    
)

export default ExpenseListItem;
