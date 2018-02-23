import selectExpenses from '../../selectors/getVisibleExpenses';
import moment from 'moment';
import expenses from '../fixture/expenses';



test('Should filter by text filter',()=>{
    const filters={
        text:'o',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }



   const result=selectExpenses(expenses,filters)
   expect(result).toEqual([
       expenses[0],expenses[1]]
   )

})

test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined

    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([
        expenses[0]
    ])
})

test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).subtract(7,'days')

    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([ 
    ])
})

test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined,

    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([ 
        expenses[0] ,expenses[1],expenses[2]
    ])
})

test('should filter by AMount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined,

    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([ 
        expenses[2] ,expenses[1],expenses[0]
    ])
})


