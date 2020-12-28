import React, { Component } from "react";
import styled from "styled-components";

import { UserService } from "api";

import Button from "components/Button";
import Input from "components/Input";

const BigButton = styled(Button)`
  width: 100%;
  padding: 15px;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    UserService.login(this.state).then((data) => {
      localStorage.setItem("token", data.token);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Auth</h1>

        <Input
          name="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <BigButton type="submit">Отправить</BigButton>
      </form>
    );
  }
}

export default Login;
