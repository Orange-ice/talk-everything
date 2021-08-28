import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Layout from './components/layout';

function App () {

    return (
        <HashRouter>
            <Switch>
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Redirect path="/" to="/home"/>
                </Layout>
            </Switch>
        </HashRouter>
    );
}

export default App;
