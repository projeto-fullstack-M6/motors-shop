import styled, { css } from "styled-components";
import { IButton } from "../interfaces/Style/button.interface";

export const StyledButton = styled.button<IButton>`
  gap: var(--gap-10);
  border-radius: var(--border-radius-4);
  font-size: var(--size-h7);
  font-weight: var(--weight-600);
  overflow: hidden;
  text-align: center;

  ${({ width }) => {
    switch (width) {
      case "one":
        return css`
          width: 315px;

          @media (max-width: 415px) {
            width: 286px;
          }

          @media (max-width: 280px) {
            width: 207px;
          }
        `;
      case "two":
        return css`
          width: 279px;
        `;
      case "three":
        return css`
          width: 262px;
          @media (max-width: 415px) {
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
          @media (max-width: 415px) {
            width: 174px;
          }
        `;
      case "six":
        return css`
          width: 155px;

          @media (max-width: 415px) {
            width: 138px;
          }

          @media (max-width: 280px) {
            width: 100px;
          }
        `;
      case "seven":
        return css`
          width: 132px;
        `;
      case "eight":
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
      case "eleven":
        return css`
          width: 50px;
        `;
      case "twelve":
        return css`
          width: fit-content;
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
      case "three":
        return css`
          height: 32px;
        `;
    }
  }}

${({ buttonStyled }) => {
    switch (buttonStyled) {
      case "black":
        return css`
          background-color: var(--grey-0);
          color: var(--white);
          &:hover {
            background-color: var(--grey-1);
          }
        `;
      case "grey-black":
        return css`
          background-color: var(--grey-6);
          color: var(--grey-2);
          &:hover {
            background-color: var(--grey-5);
          }
        `;
      case "grey-white":
        return css`
          background-color: var(--grey-5);
          color: var(--white);
        `;
      case "blue":
        return css`
          background-color: var(--brand-1);
          color: var(--white);
          &:hover {
            background-color: var(--brand-2);
          }
        `;
      case "light-blue":
        return css`
          background-color: var(--brand-4);
          color: var(--brand-1);
          font-size: var(--size-body-2);
          font-weight: var(--weight-500);
          cursor: default;
        `;
      case "white":
        return css`
          background-color: var(--grey-9);
          color: var(--grey-1);
        `;
      case "border-black":
        return css`
          color: var(--grey-0);
          border: 1px solid var(--grey-0);
          &:hover {
            background-color: var(--grey-1);
            color: var(--grey-10);
          }
        `;
      case "border-grey":
        return css`
          color: var(--grey-0);
          border: 1px solid var(--grey-4);
          &:hover {
            background-color: var(--grey-1);
            color: var(--grey-10);
          }
        `;
      case "border-blue":
        return css`
          color: var(--brand-1);
          border: 1px solid var(--brand-1);
          &:hover {
            background-color: var(--brand-4);
          }
        `;
      case "feedback-alert":
        return css`
          background-color: var(--alert-3);
          color: var(--alert-1);
          &:hover {
            background-color: var(--alert-2);
          }
        `;
      case "feedback-sucess":
        return css`
          background-color: var(--success-3);
          color: var(--success-1);
          &:hover {
            background-color: var(--success-2);
          }
        `;
      case "disable":
        return css`
          background-color: var(--brand-3);
          color: var(--brand-4);
          cursor: not-allowed;
        `;
    }
  }}

${({ font }) => {
    switch (font) {
      case "one":
        return css`
          font-size: var(--size-h7);
          color: var(--grey-2);
          font-family: var(--font-family-inter);
          font-weight: var(--weight-400);
        `;
      case "two":
        return css`
          font-size: var(--size-body-2);
          font-family: var(--font-family-inter);
          font-weight: var(--weight-500);
        `;
    }
  }}
`;
