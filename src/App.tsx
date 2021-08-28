import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Layout from './components/layout';
import Explore from './views/explore';
import Questions from './views/questions';

function App () {

    return (
        <HashRouter>
            <Switch>
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore" component={Explore}/>
                    <Route path="/questions" component={Questions}/>
                    <Redirect path="/" to="/home"/>
                </Layout>
            </Switch>
        </HashRouter>
    );
}

export default App;
