import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Library from './Library';
import About from './About';
import FAQ from './FAQ';
import Settings from './Settings';
import RoomPage from './RoomPage';


class Main extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {fname: '', lname:'', email:'', password: ''}
        }
    }

    handleUser(u){
        this.props.newUser(u)
        this.setState({user: u})
    }

    handleLogout(){
        this.setState({user: {fname: '', lname:'', email:'', password: ''}})
        this.props.newUser(null)
    }

    render(){
        if(this.state.redir){
            return
        }

        return(
            <main>
                <Switch>
                    {
                        this.state.user.fname === '' ?
                        <Route exact path="/" component={Signup}/>:
                        <Route exact path="/" component={RoomPage}/>
                    }
                    <Route exact path="/rooms" component={RoomPage}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/login" render={() => <Login user={this.handleUser.bind(this)}/>} />
                    <Route exact path="/library" component={Library}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/settings" render={() => <Settings user={this.state.user} newUser={this.handleUser.bind(this)} logout={this.handleLogout.bind(this)} />}/>
                </Switch>
            </main>
        )
    }
}
export default Main;
