import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { MdEmail, MdLock } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  Wrapper,
  SubtitleLogin,
  LoginText,
  TextContent,
  BottomTextContainer,
} from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
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

  const onSubmit = (formData) => {
    try {
      const {} = api.post("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate("/login");
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
                ErrorMsg={errors?.name?.message}
                control={control}
                name="name"
                Icon={<IoMdPerson />}
                PlaceHolder={"Nome Completo"}
              />
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
                PlaceHolder={"Password"}
                type="password"
              />
              <Button
                title={"Criar minha conta"}
                variant="secondary"
                type="submit"
              />
            </form>
            <BottomTextContainer>
              <TextContent>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </TextContent>
              <LoginText>
                Já tenho conta.{" "}
                <LoginText variant="secondary" href="/login">
                  Fazer login
                </LoginText>
              </LoginText>
            </BottomTextContainer>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
