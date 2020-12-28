import React from "react";
import styled from "styled-components";

const InputWrapper = styled.label`
  display: block;
  margin-bottom: 20px;
`;

const InputLabel = styled.div`
  margin-bottom: 5px;
`;

const InputElement = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = ({ type = "text", name, label, value, onChange }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <InputElement
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  </InputWrapper>
);

export default Input;
