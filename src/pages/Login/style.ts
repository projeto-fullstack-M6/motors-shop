import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: var(--grey-9);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;
