import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './views/home';

function App () {

    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Redirect path="/" to="/home"/>
            </Switch>
        </HashRouter>
    );
}

export default App;
