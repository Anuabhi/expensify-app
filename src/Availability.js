import React from 'react';
 export const Availability = (props) =>{
    return(
      <div>
      
      <button 
      onClick={
      (e)=>{props.handleAvailable(props.books);}}>
      Available
      </button>
      </div>
  
    );
  
  }

/*export class Availability extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.handleAvailable=this.handleAvailable.bind(this);
    }
    render()
    {
        return(
            <div>
            
            <button 
            onClick={
            (e)=>{props.handleAvailable(props.books);}}>
            Available
            </button>
            </div>
        
          ); 


        
    }
}*/