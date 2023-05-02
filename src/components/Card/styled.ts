import styled from "styled-components";

export const StyledDivCard = styled.div`
  width: 312px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-15);

  .div-img {
    background-color: var(--grey-7);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 262px;
      height: 150px;
      object-fit: cover;
    }
  }

  .div-name {
    display: flex;
    align-items: center;
    gap: var(--gap-10);

    .div-acronym {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: var(--border-radius-150);
      background-color: var(--random-1);
    }
  }

  .div-data {
    display: flex;
    justify-content: space-between;

    .div-button {
        display: flex;
        gap: var(--gap-10);
    }
  }


  .div-edit{
    display: flex;
    gap: 20px;
  }
`;
