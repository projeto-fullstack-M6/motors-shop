import styled from "styled-components";

export const StyledAdminHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: var(--grey-10);
  border-bottom: 2px solid var(--grey-6);

  > div {
    display: flex;
    align-items: center;
    width: 70%;
    margin-left: 3rem;
    box-shadow: 2px 0px 0px 0px var(--grey-6);
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14%;
    padding: 2rem;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--brand-1);
      border-radius: 50%;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: var(--grey-2);
    }
  }
`;

export const StyledSectionAdmin = styled.section`
  width: 100vw;
  height: 35vh;
  background-color: var(--brand-1);
  position: relative;
`;

export const StyledAdminCardInfo = styled.section`
  height: 50vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: var(--grey-10);
  border-radius: 4px;
  padding: 1.85rem;
  position: absolute;
  z-index: 2;
  top: 20vh;
  left: 9vw;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand-1);
    border-radius: 50%;
    height: 30%;
    width: 8%;
    font-size: 36px;
    font-weight: 500;
    color: var(--grey-10);
  }

  > div {
    display: flex;
    height: 15%;
    width: 22%;
    align-items: center;
    justify-content: space-between;

    > h2 {
      font-weight: 600;
      font-size: 20px;
      color: var(--grey-1);
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      background: var(--brand-4);
      border-radius: 4px;
      color: var(--brand-1);
    }
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-2);
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
