import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header'
import {Availability} from './Availability';
import {Purchase} from './Purchase'


export class NewApp extends React.Component{

    constructor(props)
    {
        super(props);
        this.handleAvailable=this.handleAvailable.bind(this);
        this.handlePurchase=this.handlePurchase.bind(this);
        this.state ={
           // books:[{key:"HarryPotter",value:2},{key:"Narnia",value:3},{key:"Alice in wonderland",value:4},{key:"Hobbit",value:2},{key:"Lord of the rings",value:7}]
           books:[["HarryPotter",2],["Narnia",3],["Alice in wonderland",4],["Hobbit",2],["Lord of the rings",7]]
           //books:[{HarryPotter:2},{Narnia:3},{Aliceinwonderlan:4},{Hobbit:2},{Lordoftherings:7}]
          }
    }
    render()
    {
        const title='indecission';
        const subtitle='put your life in a hand of a computer';  

        return(
            <div>
            <Header title={title} subtitle={subtitle} />
            <Availability handleAvailable={this.handleAvailable} 
             books={this.state.books} />
            <Purchase handlePurchase={this.handlePurchase} books={this.state.books}/>
            </div>
        )

    }
     handleAvailable(books)
     {
        console.log(books)
    
    // render()
    // {
    //     return(
    //     <div>
    //     <ul>
    //     {books.map((item,index) => 
    //         <li key={index}>{item}</li>
    //     )}
    //     </ul>
    //    </div>);
    // }
       
     }
    handlePurchase(booksTo)
    {
       console.log(booksTo);
         this.setState((prevState)=>({
           options:prevState.books.map((option)=>{
               if (booksTo==option[0] && option[1]>0)
                   option[1]=option[1]-1;
               
        
            })
        
           })
          )
    }
}