import moment from 'moment';

const filtersReducersDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}
export const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
export const setStartDate=(startDate=undefined)=>({
    type:'SET_START_DATE',
    startDate
});

export const setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE',
    endDate
});

export const sortByDate=()=>({
    type:'SORT_BY_DATE'


})

export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
    
})