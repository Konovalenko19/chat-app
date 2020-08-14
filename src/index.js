import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { UserAPI } from 'Api';

import Chats from 'Components/Chats';
import Login from 'Components/Login';
import Signup from 'Components/Signup';
import ProtectedRoute from 'Components/ProtectedRoute';

import './index.css';

class App extends Component {
    componentDidMount() {
        UserAPI.getProfile(localStorage.getItem('token'));
    }

    render() {
        return (
            <div>
                My first react-webpack app 1!
                <hr />

                <Router>
                    <Switch>
                        <ProtectedRoute path='/' exact component={Chats} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
