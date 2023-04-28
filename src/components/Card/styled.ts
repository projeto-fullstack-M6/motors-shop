import styled from "styled-components";

export const StyledDivCard = styled.div`
  width: 312px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--gap-20);
  padding: 20px 0;

  a {
    display: flex;
    flex-direction: column;
    gap: var(--gap-20);
  }

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

  section {
    position: relative;

    .next-previous {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 10%;
      width: 100%;
      color: var(--brand-1);
      position: absolute;
      inset: 0;
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

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .div-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .div-button {
    display: flex;
    gap: var(--gap-15);
  }
`;
