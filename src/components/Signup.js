import React, { Component } from "react";
import styled from "styled-components";

import { UserService } from "api";

import Button from "components/Button";
import Input from "components/Input";

const BigButton = styled(Button)`
  width: 100%;
  padding: 15px;
`;

class Signup extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    UserService.signup(this.state).then((data) => {
      alert(data.message);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <Input
          name="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <Input
          name="name"
          label="Name"
          value={this.state.name}
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

export default Signup;
