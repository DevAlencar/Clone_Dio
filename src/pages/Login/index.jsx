import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { MdEmail, MdLock } from "react-icons/md";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Column,
  Row,
  TitleLogin,
  Wrapper,
  SubtitleLogin,
  ForgotCreateText,
} from "./styles";

export default function Login() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <Input Icon={<MdEmail />} PlaceHolder={"E-mail"} />
              <Input Icon={<MdLock />} PlaceHolder={"Senha"} type="password" />
              <Button
                onClick={handleClickSignIn}
                title={"Entrar"}
                variant="secondary"
                type="button"
              />
            </form>
            <Row>
              <ForgotCreateText>Esqueci minha senha</ForgotCreateText>
              <ForgotCreateText variant="secondary">
                Criar conta
              </ForgotCreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
