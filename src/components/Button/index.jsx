import React from "react";

import { ButtonContainer } from "./styles";

export default function Button({ type, title, variant = "primary", onClick }) {
  return (
    <ButtonContainer type={type} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
