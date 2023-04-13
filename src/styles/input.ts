import styled from "styled-components";

export const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-10);
`;

export const StyledLabel = styled.label`
  font-family: var(--font-family-inter);
  font-weight: var(--weight-500);
`;

export const StyledInput = styled.input`
  width: 315px;
  height: 48px;
  padding: 10px;
  border: 1.5px solid var(--grey-7);
  color: var(--grey-3);

  font-size: var(--size-h7);
  font-weight: var(--weight-400);
  border-radius: var(--border-radius-4);

  transition: ease-in-out 0.3s;

  &::placeholder {
    font-size: var(--size-h7);
    font-weight: var(--weight-400);
    color: var(--grey-3);
    border-radius: var(--radius-4);
  }

  &:hover {
    background-color: var(--grey-9);
  }

  &:focus {
    outline: var(--brand-2) solid 2px;
  }
`;
