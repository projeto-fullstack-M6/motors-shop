import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  animation: transition 2s;

  height: 140px;
  background-color: var(--grey-0);

  img {
    object-fit: cover;
  }

  a {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white);
    background-color: var(--grey-1);
    border-radius: var(--border-radius-4);
    font-size: var(--size-h7);
  }

  @media (max-width: 415px) {
    flex-direction: column;
    height: 250px;
  }

  @media (max-width: 280px) {
    text-align: justify;
    padding: 0 20px;
  }

  @keyframes transition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
