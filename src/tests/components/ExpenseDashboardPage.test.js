import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})