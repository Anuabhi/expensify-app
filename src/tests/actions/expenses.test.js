import {addExpense,remvoeExpense,editExpense, removeExpense} from '../../actions/expenses';
test('Should set up for remove expense action',()=>{
    const action=removeExpense({id:'abc123'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('Should set up for redit expense action',()=>{
    const action=editExpense('abc123',{note:'This is a simple'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc123',
        updates:{note:'This is a simple'}
    })
})

test('Should setup add Expense action',()=>{
    const expenseDate={
        description:'baby',
        amount:1200,
        createdAt:1000,
        note:'This is for shoes'
    }
    const action=addExpense(expenseDate);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseDate,
            id:expect.any(String)
        }

    })


})

test('Should setup add Expense action with default values',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            
            createdAt:0,

            
        }

    })

    
})


