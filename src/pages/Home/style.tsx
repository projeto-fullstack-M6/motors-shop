import styled from "styled-components";
import MainCard from "../../assets/MainCard.svg";

export const StyledHeader = styled.header`
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
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }
`;

export const StyledImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
  background: url(${MainCard});
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  > h2 {
    color: var(--grey-10);
    font-size: 40px;
    font-weight: 700;
  }

  > p {
    color: var(--grey-10);
    font-size: 30px;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin-top: 3rem;

  > aside {
    width: 20%;

    div {
      margin-bottom: 2rem;

      h2 {
        font-size: 24px;
        font-weight: 600;
      }

      > div {
        margin-top: 1rem;

        p {
          color: var(--grey-3);
          font-size: 16px;
          font-weight: 500;
        }
      }

      > nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  > main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
  }
`;

export const StyledPageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;

  > div {
    border: 2px solid blue;
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
        color: #868e968a;
      }
    }
    button {
      color: var(--brand-2);
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
