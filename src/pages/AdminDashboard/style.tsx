import styled from "styled-components";

export const StyledSectionAdmin = styled.section`
  width: 100vw;
  height: 35vh;
  background-color: var(--brand-1);
  position: relative;
`;

export const StyledAdminCardInfo = styled.section`
  height: 42vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: var(--grey-10);
  border-radius: var(--border-radius-4);
  padding: 1.85rem;
  position: absolute;
  z-index: 2;
  top: 20vh;
  left: 9vw;

  @media (max-width: 440px) {
    padding: 1rem;
  }

  .acronym-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    color: var(--white);
    background-color: var(--brand-1);
    font-size: var(--size-h2);
    font-weight: var(--weight-500);

    @media (max-width: 440px) {
      height: 80px;
      width: 80px;
    }
  }

  > div {
    display: flex;
    height: 15%;
    width: 22%;
    min-width: 300px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 440px) {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--gap-10);
      height: 20%;
      min-width: 200px;
    }
  }
`;

export const StyledMainContentAdmin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: var(--grey-8);

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 35vh;
    width: 90%;
  }
`;

export const StyledAdminPageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: var(--grey-8);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12%;

    > div {
      display: flex;
      justify-content: space-between;
      width: 29%;
      p {
        color: var(--grey-3);
      }

      span {
        color: var(--grey-3);
      }
    }
    button {
      color: var(--brand-2);
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
