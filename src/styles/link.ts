import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkLogin = styled(Link)`
  color: var(--brand-1);
  font-weight: var(--weight-600);
  font-size: var(--size-h7);
  font-family: var(--font-family-inter);
  cursor: pointer;
`;

export const StyledLinkRegister = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;

  color: var(--grey-0);
  border: 1px solid var(--grey-4);
  border-radius: var(--border-radius-4);
  font-family: var(--font-family-inter);
  font-weight: var(--weight-600);
  font-size: var(--size-h7);

  transition: ease-in-out 0.4s;

  cursor: pointer;

  &:hover {
    background-color: var(--grey-1);
    color: var(--grey-10);
  }

  &.width-header {
    width: 133px;
  }

  &.width-register {
    width: 315px;

    @media (max-width: 415px) {
      width: 286px;
    }

    @media (max-width: 280px) {
      width: 207px;
    }
  }
`;

export const StyledLinkDropdown = styled(Link)`
  color: var(--grey-2);
  font-weight: var(--weight-400);
  font-size: var(--size-h7);
  font-family: var(--font-family-inter);
  cursor: pointer;
`;
