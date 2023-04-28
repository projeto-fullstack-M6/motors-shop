import styled from "styled-components";

// Estilização dos modais

export const StyledSectionModal = styled.section`
<<<<<<< HEAD
  position: relative;
  inset: 0;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
=======
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color: var(--modal);
>>>>>>> e5cc28f6a2f38fb2a80d2fc89158c4339e412e47
  display: flex;
  align-items: center;
  justify-content: center;

  .div-modal {
<<<<<<< HEAD
    width: 40%;
=======
    width: 29%;
    min-width: 400px;
>>>>>>> e5cc28f6a2f38fb2a80d2fc89158c4339e412e47
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
<<<<<<< HEAD
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

=======

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

>>>>>>> e5cc28f6a2f38fb2a80d2fc89158c4339e412e47
  .div-modal-button {
    display: flex;
    justify-content: end;
    gap: var(--gap-10);
<<<<<<< HEAD
=======
    width: 100%;
>>>>>>> e5cc28f6a2f38fb2a80d2fc89158c4339e412e47
  }
`;
