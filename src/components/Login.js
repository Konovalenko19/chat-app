import React, { Component } from 'react';

import { UserAPI } from 'Api';

import Button from 'Components/Button';

class Login extends Component {
    state = {
        login: '',
        password: ''
    }
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit = event => {
        event.preventDefault();
        UserAPI.login(this.state).then(data => {
            localStorage.setItem('token', data.jwt);
            this.props.history.push('/');
        });
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Auth</h1>

                <label>
                    <fieldset>
                        <legend>Login</legend>
                        <input
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            name='login'
                            placeholder='Login'
                            value={this.state.login}
                            onChange={this.handleChange}
                        />
                    </fieldset>
                </label>

                <label>
                    <fieldset>
                        <legend>Password</legend>
                        <input
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </fieldset>
                </label>

                <Button type='submit'>Отправить</Button>
            </form>
        )
    }
};

export default Login;