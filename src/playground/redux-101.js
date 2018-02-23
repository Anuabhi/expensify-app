import {createStore} from 'redux';
const incrementCOunt =({incrementBy=1}={})=>({
         
             type:'INCREMENT',
             incrementBy:incrementBy
             
         

});

const decrementCOunt =({decrementBy=1}={})=>({
         
    type:'DECREMENT',
    decrementBy:decrementBy
    


});

const resetCount=()=>({
    type:'RESET'
})

const setCOunt =({setCount=101}={})=>({
         
    type:'SET',
    setCount:setCount
    


});

const countReducer=(state={count:0},action)=>{
    switch(action.type)
 {
     
  case 'INCREMENT':
   const incrementBy=typeof action.incrementBy==='number' ?action.incrementBy:1
  return{
    count:state.count + action.incrementBy

     };
     case 'DECREMENT':
     const decrementBy=typeof action.decrementBy==='number' ?action.decrementBy:1
     return{
       count:state.count - action.decrementBy
   
        };
        case 'RESET':
        return{
          count:0
      
           };
           case 'SET':
           return{
             count:action.setCount
         
              };
     default:
      return state;


 }
    
};


const store=createStore(countReducer);
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})



store.dispatch(incrementCOunt(({incrementBy:2})));
store.dispatch(incrementCOunt());
store.dispatch(incrementCOunt());
store.dispatch(incrementCOunt());
store.dispatch(decrementCOunt(({decrementBy:10})));

store.dispatch(resetCount());
store.dispatch(setCOunt());




