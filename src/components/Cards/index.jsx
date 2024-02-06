import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import { FiThumbsUp } from "react-icons/fi";

import React from "react";

export default function Cards() {
  return (
    <CardContainer>
      <ImageBackground src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/115596349?v=4" />
          <div>
            <h4>Arthur Alencar</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito com o Curso de html e css no bootcamp dio do Global
            avanade ...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}
