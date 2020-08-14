import React, { Component } from 'react';

import { UserAPI } from 'Api';

import Button from 'Components/Button';

class Signup extends Component {
    state = {
        login: '',
        password: '',
        avatar: '',
        bio: ''
    }
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit = event => {
        event.preventDefault();
        UserAPI.signup(this.state);
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up For An Account</h1>
  
                <label>Username</label>
                <input
                name='login'
                placeholder='Login'
                value={this.state.login}
                onChange={this.handleChange}
                /><br/>

                <label>Password</label>
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                /><br/>

                <label>Avatar</label>
                <input
                name='avatar'
                placeholder='Avatar (URL)'
                value={this.state.avatar}
                onChange={this.handleChange}
                /><br/>

                <label>Bio</label>
                <textarea
                name='bio'
                placeholder='Bio'
                value={this.state.bio}
                onChange={this.handleChange}
                /><br/>

                <Button type='submit'>Отправить</Button>
            </form>
        );
    }
};

export default Signup;
