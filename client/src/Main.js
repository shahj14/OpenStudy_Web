import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Library from './Library';
import About from './About';
import FAQ from './FAQ';
import Settings from './Settings';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/library" component={Library}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/faq" component={FAQ}/>
            <Route exact path="/settings" component={Settings}/>
        </Switch>
    </main>
);

export default Main;
