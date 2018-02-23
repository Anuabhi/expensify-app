import { expensesReducer} from '../../reducers/expensesReducer';
import expenses from '../fixture/expenses';
test('expense reducer',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense,',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should remove expenses if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

})


test('should add expenses',()=>{
    const e={
        
        id:4,
        description:'this is anu',
        amount:400,
        createdAt:100,
        note:'hey'

    }
    const action={
        type:'ADD_EXPENSE',
        expense: e
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,e]);

})


test('should edit expense',()=>{
    
    const  description='i am agnes'
    
    
    const action={
        type:'EDIT_EXPENSE',
        expense: expenses[1].id,
        updates:{description}
    }
    const state=expensesReducer(expenses,action);
    expect(state[1].description).toEqual(expenses[1].description);

})

test('should edit expense',()=>{
    
    const  description='i am agnes'
    
    
    const action={
        type:'EDIT_EXPENSE',
        expense: '-1',
        updates:{description}
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

})



