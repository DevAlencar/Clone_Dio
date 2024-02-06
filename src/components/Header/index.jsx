import React from "react";

import logo from "../../assets/logo.svg";

import Button from "../Button";

import {
  Container,
  Row,
  Column,
  SearchInputContainer,
  Input,
  Menu,
  MenuRigth,
  UserPicture,
  Wrapper,
} from "./styles";

export default function Header({ userAutenticated }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo" />
          {userAutenticated ? (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu href="/">Live Code</Menu>
              <Menu href="/">Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {userAutenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/115596349?v=4" />
          ) : (
            <>
              <MenuRigth href="/">Home</MenuRigth>
              <Button title={"Entrar"} />
              <Button title={"Cadastrar"} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
