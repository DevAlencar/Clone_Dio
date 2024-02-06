import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";

import { Controller } from "react-hook-form";

import React from "react";

export default function Input({
  type,
  name,
  control,
  Icon,
  PlaceHolder,
  ErrorMsg,
}) {
  return (
    <>
      <InputContainer>
        {Icon ? <IconContainer>{Icon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText {...field} placeholder={PlaceHolder} type={type} />
          )}
        />
      </InputContainer>
      {ErrorText ? <ErrorText>{ErrorMsg}</ErrorText> : null}
    </>
  );
}
