import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/getVisibleExpenses';


export const ExpenseList =(props) =>(
    <div>
    

    
    
     <div>
     {
         props.expenses.length===0?(<p>Noexpenses</p>):(
     
      props.expenses.map((expense)=>(
    
       <ExpenseListItem  key={expense.id} {...expense}/>)
    ))
   }
    </div>
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
}



export default connect(mapStateToProps)(ExpenseList);

