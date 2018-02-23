import {expensesReducer} from '../reducers/expensesReducer';
import {filtersReducer} from '../reducers/filtersReducer';
import {createStore, combineReducers} from 'redux';

export const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
        

    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);