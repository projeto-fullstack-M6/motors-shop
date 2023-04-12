import styled, { css } from "styled-components";
import { IButton } from "../interfaces/button.interface";

export const StyledButton = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;

  font-family: "Inter", sans-serif;
  font-size: 16px;

  ${({ width }) => {
    switch (width) {
      case "one":
        return css`
          width: 315px;
          @media (max-width: 375) {
            width: 286px;
          }
        `;
      case "two":
        return css`
          width: 279px;
        `;
      case "three":
        return css`
          width: 262px;
          @media (max-width: 375) {
            width: 159px;
          }
        `;
      case "four":
        return css`
          width: 206px;
        `;
      case "five":
        return css`
          width: 193px;
          @media (max-width: 375) {
            width: 174px;
          }
        `;
      case "six":
        return css`
          width: 160px;
        `;
      case "seven":
        return css`
          width: 132px;
        `;
      case "eigth":
        return css`
          width: 108px;
        `;
      case "nine":
        return css`
          width: 100px;
        `;
      case "ten":
        return css`
          width: 80px;
        `;
    }
  }}

  ${({ height }) => {
    switch (height) {
      case "one":
        return css`
          height: 48px;
        `;
      case "two":
        return css`
          height: 38px;
        `;
    }
  }}

${({ buttonStyled }) => {
    switch (buttonStyled) {
      case "black":
        return css`
          background-color: #0b0d0d;
          color: #ffffff;
          &:hover {
            background-color: #212529;
          }
        `;
      case "grey-black":
        return css`
          background-color: #dee2e6;
          color: #495057;
          &:hover {
            background-color: #ced4da;
          }
        `;
      case "grey-white":
        return css`
          background-color: #ced4da;
          color: #ffffff;
        `;
      case "blue":
        return css`
          background-color: #4529e6;
          color: #ffffff;
          &:hover {
            background-color: #5126ea;
          }
        `;
      case "light-blue":
        return css`
          background-color: #edeafd;
          color: #4529e6;
        `;
      case "white":
        return css`
          background-color: #fdfdfd;
          color: #212529;
        `;
      case "border-black":
        return css`
          background-color: transparent;
          color: #0b0d0d;
          border: 1px solid #0b0d0d;
          &:hover {
            background-color: #212529;
            color: #fdfdfd;
          }
        `;
      case "border-grey":
        return css`
          background-color: transparent;
          color: #0b0d0d;
          border: 1px solid #adb5bd;
          &:hover {
            background-color: #212529;
            color: #fdfdfd;
          }
        `;
      case "border-blue":
        return css`
          background-color: transparent;
          color: #4529e6;
          border: 1px solid #4529e6;
          &:hover {
            background-color: #edeafd;
          }
        `;
      case "feedback-alert":
        return css`
          background-color: #ffe5e5;
          color: #cd2b31;
          &:hover {
            background-color: #fdd8d8;
          }
        `;
      case "feedback-sucess":
        return css`
          background-color: #ddf3e4;
          color: #18794e;
          &:hover {
            background-color: #ccebd7;
          }
        `;
      case "disable":
        return css`
          background-color: #b0a6f0;
          color: #edeafd;
        `;
    }
  }}
`;
