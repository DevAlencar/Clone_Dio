import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { MdEmail, MdLock } from "react-icons/md";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

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

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail não válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  console.log(errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get("/users", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("usuário inválido");
      }
      console.log("retorno api", data);
    } catch {
      alert("Houve um erro no servidor");
    }
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
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                ErrorMsg={errors?.email?.message}
                control={control}
                name="email"
                Icon={<MdEmail />}
                PlaceHolder={"E-mail"}
              />
              <Input
                ErrorMsg={errors?.password?.message}
                control={control}
                name="password"
                Icon={<MdLock />}
                PlaceHolder={"Senha"}
                type="password"
              />
              <Button title={"Entrar"} variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgotCreateText>Esqueci minha senha</ForgotCreateText>
              <ForgotCreateText variant="secondary" href="/register">
                Criar conta
              </ForgotCreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
