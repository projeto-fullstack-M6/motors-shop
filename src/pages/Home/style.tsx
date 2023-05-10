import styled from "styled-components";
import MainCard from "../../assets/MainCard.png";

export const StyledImg = styled.div`
  width: 100vw;
  height: 60vh;
  background-image: url(${MainCard});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: transition 2s;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
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

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin-top: 3rem;
  animation: transition 2s;

  > aside {
    width: 20%;

    div {
      margin-bottom: 2rem;

      > div {
        margin-top: 1rem;

        .button-filter {
          color: var(--grey-3);
          font-size: var(--size-h7);
          font-family: var(--font-family-lexend);
          font-weight: 500;
          line-height: 25px;
          width: 100%;
          display: block;
          text-align: left;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          background-color: var(--grey-5);
          -moz-appearance: textfield;
          width: 6rem;
          height: 2.2rem;
          margin-right: 1rem;
          text-align: center;

          &::placeholder {
            font-weight: 600;
            color: var(--grey-3);
          }
        }
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
  animation: transition 2s;

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
        color: rgba(134, 142, 150, 0.5);
      }
    }
    button {
      color: var(--brand-2);
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
