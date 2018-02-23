import {setStartDate,setEndDate, setTextFilter,sortByAmount,sortByDate} from '../../actions/filters';
import moment from 'moment';
test('should generate setStartDate',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })

})

test('should generate setEndDate',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
    
})


test('should genratet text filter',()=>{
    const action=setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })


})

test('should genratet text filter',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })


})

test('should sort by date',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        
    })


})

test('should sort by Amount',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        
    })


})