  
import React from 'react';

export  class Purchase extends React.Component
  {
    constructor(props)
    {
      super(props);
      this.handleAddOption=this.handleAddOption.bind(this);
      this.state={
        error:undefined,
        
      }
    }
  
  
    handleAddOption(e)
    {
      //console.log('Inside Add Option')
      e.preventDefault();
      const option=e.target.elements.books.value.trim();
      const error=this.props.handlePurchase(option);
      
      
    }
  
    render()
    {
   return(
     <div>
     {this.state.error && <p> {this.state.error}</p>}
     <form onSubmit={this.handleAddOption}>
     
     <select name="books">
     <option>" "</option>
     <option>HarryPotter</option>
     <option>Narnia</option>
     <option>Alice in wonderland</option>
     <option>Hobbit</option>
     <option>Lord of the rings</option>
     </select>;

     
    
     <button> Purchase </button>   
  </form>
     </div>
   );
   
    }
  }
  
 