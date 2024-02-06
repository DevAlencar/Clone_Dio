import Header from "../../components/Header";
import Cards from "../../components/Cards";
import UserInfo from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

export default function UserFeed() {
  return (
    <>
      <Header userAutenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Column>
        <Column flex={1}>
          <TitleHighlight># TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={75}
            name="Arthur Alencar"
            image="https://avatars.githubusercontent.com/u/115596349?v=4"
          />
          <UserInfo
            percentual={85}
            name="Arthur Alencar"
            image="https://avatars.githubusercontent.com/u/115596349?v=4"
          />
          <UserInfo
            percentual={25}
            name="Arthur Alencar"
            image="https://avatars.githubusercontent.com/u/115596349?v=4"
          />
          <UserInfo
            percentual={65}
            name="Arthur Alencar"
            image="https://avatars.githubusercontent.com/u/115596349?v=4"
          />
          <UserInfo
            percentual={95}
            name="Arthur Alencar"
            image="https://avatars.githubusercontent.com/u/115596349?v=4"
          />
        </Column>
      </Container>
    </>
  );
}
