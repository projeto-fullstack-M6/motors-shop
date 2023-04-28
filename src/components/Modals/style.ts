import styled from "styled-components";

// Estilização dos modais

export const StyledSectionModal = styled.section`
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: var(--modal);
  display: flex;
  align-items: center;
  justify-content: center;

  .div-modal {
    width: 29%;
    min-width: 400px;
    height: fit-content;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-radius: var(--border-radius-8);
    gap: var(--gap-20);
  }

  .div-modal-header {
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.5%;

    button {
      color: var(--grey-4);
    }
  }

  .div-modal-form {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-20);
  }

  .div-modal-button {
    display: flex;
    justify-content: end;
    gap: var(--gap-10);
    width: 100%;
  }
`;
