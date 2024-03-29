import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding 2px 12px;
    width: 100%;
    margin-right: 5px;
    height: 20px;
    min-width: 120px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

    ${({ variant }) =>
      variant === "secondary" &&
      css`
        min-width: 167px;
        height: 30px;

        background: #e4105d;

        &::after {
          content: " ";
          position: absolute;
          border: 1px solid #e4105d;
          top: -5px;
          left: -6px;
          width: calc(100% + 10px);
          height: calc(100% + 8px);
          border-radius: 22px;
        }
      `}
`;
