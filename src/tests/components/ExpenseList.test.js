import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixture/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})


test('should render',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})



