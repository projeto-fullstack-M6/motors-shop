import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  border-bottom: 1px solid var(--grey-6);

  img {
    object-fit: cover;
    padding-left: 60px;

    @media (max-width: 415px) {
      width: 150px;
      padding-left: 20px;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 20%;
    border-left: 1px solid var(--grey-6);
    gap: var(--gap-30);
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
    cursor: pointer;

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
