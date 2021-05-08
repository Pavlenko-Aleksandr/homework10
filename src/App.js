import React from 'react';
import Users from './modules/users/components/Users/Users';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from './modules/users/components/Form/Form';
import { Provider } from 'react-redux';
import store from './store';
import { fetchUsers } from './store/actions/actions';

store.dispatch(fetchUsers());

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <div className="main">
                        <Route path="/users" exact component={Users}/>
                        <Route path="/add" exact component={Form}/>
                        <Route path={"/users" + "/:id"} exact component={Form}/>
                        <Route path="/" exact>
                            <Redirect to="/users" />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;