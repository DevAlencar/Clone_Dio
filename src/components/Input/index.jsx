import { IconContainer, InputContainer, InputText } from "./styles";

import React from "react";

export default function Input({ Icon, PlaceHolder }) {
  return (
    <InputContainer>
      {Icon ? <IconContainer>{Icon}</IconContainer> : null}
      <InputText placeholder={PlaceHolder} />
    </InputContainer>
  );
}
