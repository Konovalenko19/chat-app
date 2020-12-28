import React, { useState } from "react";

import Avatar from "components/Avatar";

import * as S from "./ChatsList.styled";

const testData = [
  { id: 1, name: "Vladimir Konovalenko", last_message: "Hello world" },
  { id: 2, name: "Olga Petrova", last_message: "What are u say??" },
  {
    id: 3,
    name: "Alina Tabak",
    last_message:
      "Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something! Say something!",
  },
];

const ChatsList = (props) => {
  // const { chats } = props;

  if (!testData.length) {
    return "No chats yet!";
  }

  const [active, setActive] = useState(null);

  const hadleClick = (id) => {
    setActive(id);
  };

  return (
    <S.List>
      {testData.map((chat) => {
        const shortName = chat.name
          .split(" ")
          .map((l) => l.slice(0, 1))
          .join("");
        return (
          <S.Row
            key={chat.id}
            isActive={chat.id === active}
            onClick={() => hadleClick(chat.id)}
          >
            <Avatar text={shortName} />
            <S.RowData>
              <S.Name>{chat.name}</S.Name>
              <S.Message>{chat.last_message}</S.Message>
            </S.RowData>
          </S.Row>
        );
      })}
    </S.List>
  );
};

export default ChatsList;
