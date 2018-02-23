import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

test('Expenseform',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('Expenseform with expense data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})


test('should render for invalid submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    }
);

expect(wrapper.state('error').length).toBeGreaterThan(0);
expect(wrapper).toMatchSnapshot();
})


test('should set up error codes on description page',()=>{
    const value="new Description";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
} )

test('should set up text area change',()=>{
    const value="i don't know";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
} )


test('should set valid amount chaning',()=>{
    const value="23.50";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toEqual(value);
    expect(wrapper).toMatchSnapshot();
} )



test('should set valid amount chaning',()=>{
    const value="122.223";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toEqual('');
    //expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
} )

test('should call on submit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
    //onSubmitSpy('ANdre');
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    //expect(onSubmitSpy).toHaveBeenCalled();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
        
    })

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
})

test('should state new date on date change',()=>{
const now=moment();
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);

})


test('should change calneder focused',()=>{

    const f=true;
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:f});
    expect(wrapper.state('calenderFocused')).toEqual(f);
})