import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--white);
  width: 100%;
  height: 80px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  img {
    object-fit: cover;
    padding-left: 60px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 25%;
    border-left: 1px solid var(--grey-6);
    gap: var(--gap-20);
  }

  div {
    display: flex;
    justify-content: start;
    align-items: center;

    height: 100%;
    width: 20%;
    border-left: 1px solid var(--grey-6);
    gap: var(--gap-10);
    padding-left: 30px;

    .acronym {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      background-color: var(--brand-1);
      border-radius: var(--border-radius-150);
    }
  }
`;
