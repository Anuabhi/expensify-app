import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {removeExpense} from '../actions/expenses';
import {editExpense,addExpense} from '../actions/expenses';
//import expenses from '../tests/fixture/expenses';

export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.id,expense);
        this.props.history.push('/');
    }


    onClick=()=>{
        this.props.removeExpense({id:this.props.id})
        this.props.history.push('/');
    }




render(){
    
    return(
    <div>
    <ExpenseForm
     expense={this.props.expense}
     onSubmit={this.onSubmit} />
     
     <button onClick={this.onClick}>Remove</button>

     Editing the Expense page
    </div>
);
}
}


const mapDispatchToProps=(dispatch)=>({
    
    editExpense:(id,updates)=>dispatch(editExpense(id,updates)),
    removeExpense:({id})=>dispatch(removeExpense({id}))


})

const mapStateToProps=(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>
            expense.id===props.match.params.id
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);