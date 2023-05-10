import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: var(--grey-9);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: transition 2s;

  .section-login {
    width: 412px;
    height: fit-content;
    padding: 44px 48px;

    display: flex;
    flex-direction: column;
    gap: var(--gap-20);

    background-color: var(--grey-10);
    border-radius: var(--border-radius-4);

    @media (max-width: 415px) {
      width: 343px;
      padding: 44px 28px;
    }

    @media (max-width: 280px) {
      width: 243px;
      height: 442px;
      padding: 24px 18px;
    }
  }

  &.login {
    height: 100vh;
  }

  &.register {
    height: fit-content;
    padding: 80px 0;

    @media (max-width: 415px) {
      padding: 40px 0;
    }
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
