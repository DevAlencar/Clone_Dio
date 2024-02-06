import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { Container, TextContent, Title, TitleHighlight } from "./styles";

import banner from "../../assets/banner.svg";
import Button from "../../components/Button";

export default function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br />o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            onClick={handleClickSignIn}
            variant={"secondary"}
            title={"Começar agora"}
          />
        </div>
        <div>
          <img src={banner} alt="Banner da DIO" />
        </div>
      </Container>
    </>
  );
}
