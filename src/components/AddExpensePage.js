import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';
import {connect} from 'react-redux';


export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.addExpense(expense);
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
            This is from add expense component
            <h1>Add expense</h1>
            <ExpenseForm 
            onSubmit={this.onSubmit}/>
     </div>
        )

    }
}

const mapDispatchToProps=(dispatch)=>({
    
         addExpense:(expense)=>dispatch(addExpense(expense))
    

})
export default connect(undefined,mapDispatchToProps)(AddExpensePage);