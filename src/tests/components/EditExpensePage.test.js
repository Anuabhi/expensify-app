import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';

let editExpense,history,wrapper,removeExpense,wrapper1;
beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow(<EditExpensePage editExpense={editExpense} id={'2'} history={history}/>)
    wrapper1=shallow(<EditExpensePage removeExpense={removeExpense} id={'2'} history={history}/>)
})


test('should i test',()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
})

test('should remove expense id',()=>{
    wrapper1.find('button').prop('onClick')()
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
})