import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import helpPage from '../components/helpPage';

const AppRouter =() =>(
    <BrowserRouter>
    <div>
    <Header />
     <Switch>

       <Route path="/" component={ExpenseDashboardPage} exact={true}/>
       <Route path="/create" component={AddExpensePage}/>
       <Route path="/edit/:id" component={EditExpensePage} />
       <Route path="/help" component={helpPage} />
       <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>

);

export default AppRouter;
