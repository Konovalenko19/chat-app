import React, { Component } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

// import { UserService } from "api";

import Button from "components/Button";
import ChatsList from "components/ChatsList";

const BigButton = styled(Button)`
  width: 100%;
  padding: 15px;
`;

const ChatsListStyled = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;

  & li {
    display: block;
    position: relative;
    height: 60px;
    padding-left: 55px;

    &:hover {
      background-color: #f1f1f1;
    }

    & > img {
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;
    }
  }
`;

class Chats extends Component {
  state = {
    loading: false,
    chats: [],
  };

  render() {
    const { chats, loading } = this.state;
    return (
      <>
        <h3>Chats list</h3>

        <ChatsList />

        <ChatsListStyled>
          {loading ? (
            <Skeleton count={3} height={56} />
          ) : chats ? (
            chats.map((chat) => (
              <li key={chat.id}>
                <img src={chat.photo} />
                <strong>{chat.name}:</strong>
                <br />
                <span>{chat.last_message}</span>
              </li>
            ))
          ) : (
            <li>Нет чатов</li>
          )}
        </ChatsListStyled>

        <BigButton
          onClick={() => {
            localStorage.removeItem("token");
            this.props.history.push("/login");
          }}
        >
          Log out
        </BigButton>
      </>
    );
  }
}

export default Chats;
