import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses';
import NotFoundPage from '../../components/NotFoundPage';

test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
})