import {filtersReducer} from '../../reducers/filtersReducer';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})


test('should sort by amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})


test('should sort by amount',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined

    }
    const action={type:'SORT_BY_DATE'};
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toEqual('date')
    
})
test('should sort by amount',()=>{
    const currentState={
        text:'e',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined

    }
    const action={type:'SET_TEXT_FILTER',text:'e'};
    const state=filtersReducer(currentState,action);
    expect(state.text).toEqual('e')
    
})

test('should set start date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:moment(0),
        endDate:undefined

    }
    const action={type:'SET_START_DATE',startDate:moment(0)};
    const state=filtersReducer(currentState,action);
    expect(state.startDate).toEqual(moment(0))
    
})

test('should set start date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        endDate:moment(0),
        startDate:undefined

    }
    const action={type:'SET_END_DATE',endDate:moment(0)};
    const state=filtersReducer(currentState,action);
    expect(state.endDate).toEqual(moment(0))
    
})