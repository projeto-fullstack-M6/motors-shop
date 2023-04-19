import styled, { css } from "styled-components";
import { BaseTitle } from "./components/Typography";
import { IText } from "../interfaces/Style/typhography.interface";

export const StyledTitle = styled(BaseTitle)<IText>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "heading-1-700":
        return css`
          font-size: var(--size-h1);
          font-weight: var(--weight-700);
          font-family: var(--font-family-lexend);
        `;
      case "heading-2-600":
        return css`
          font-size: var(--size-h2);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-3-600":
        return css`
          font-size: var(--size-h3);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-3-500":
        return css`
          font-size: var(--size-h3);
          font-weight: var(--weight-500);
          font-family: var(--font-family-lexend);
        `;
      case "heading-4-600":
        return css`
          font-size: var(--size-h4);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-4-500":
        return css`
          font-size: var(--size-h4);
          font-weight: var(--weight-500);
          font-family: var(--font-family-lexend);
        `;
      case "heading-5-600":
        return css`
          font-size: var(--size-h5);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-5-500":
        return css`
          font-size: var(--size-h5);
          font-weight: var(--weight-500);
          font-family: var(--font-family-lexend);
        `;
      case "heading-6-600":
        return css`
          font-size: var(--size-h6);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-6-500":
        return css`
          font-size: var(--size-h6);
          font-weight: var(--weight-500);
          font-family: var(--font-family-lexend);
        `;
      case "heading-7-600":
        return css`
          font-size: var(--size-h7);
          font-weight: var(--weight-600);
          font-family: var(--font-family-lexend);
        `;
      case "heading-7-500":
        return css`
          font-size: var(--size-h7);
          font-weight: var(--weight-500);
          font-family: var(--font-family-lexend);
        `;
      case "body-1-400":
        return css`
          font-size: var(--size-body-1);
          font-weight: var(--weight-400);
          font-family: var(--font-family-inter);
        `;
      case "body-1-600":
        return css`
          font-size: var(--size-body-1);
          font-weight: var(--weight-600);
          font-family: var(--font-family-inter);
        `;
      case "body-2-400":
        return css`
          font-size: var(--size-body-2);
          font-weight: var(--weight-400);
          font-family: var(--font-family-inter);
        `;
      case "body-2-500":
        return css`
          font-size: var(--size-body-2);
          font-weight: var(--weight-500);
          font-family: var(--font-family-inter);
        `;
      case "body-2-700":
        return css`
          font-size: var(--size-body-2);
          font-weight: var(--weight-700);
          font-family: var(--font-family-inter);
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          color: var(--white);
        `;
      case "grey-1":
        return css`
          color: var(--grey-1);
        `;
      case "grey-2":
        return css`
          color: var(--grey-2);
        `;
      case "black":
        return css`
          color: var(--black);
        `;
    }
  }}

${({ align }) => {
    switch (align) {
      case "align-self-end":
        return css`
          align-self: end;
        `;
      case "align-self-center":
        return css`
          align-self: center;
        `;
    }
  }}
`;
