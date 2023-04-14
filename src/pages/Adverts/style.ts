import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  color: var(--black);
  margin-bottom: 20px;

  .secRight {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .card1 {
      background-color: var(--white);
      width: 95%;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;

      img {
        width: 441px;
        height: 250px;
      }
    }

    .card2 {
      width: 95%;
      background-color: var(--white);
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      height: 150px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      div {
        display: flex;
        justify-content: space-between;
      }

      .km {
        display: flex;
        width: 20%;
        gap: 5px;
        p {
          width: 40%;
          height: 20px;
          font-size: 14px;
          background-color: var(--brand-4);
          border-radius: 4px;
          color: var(--brand-2);
          text-align: center;
        }
      }
    }

    .card3 {
      width: 95%;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
      height: 200px;
      background-color: var(--white);
      font-size: 16px;
      font-weight: var(--weight-400);
      gap: 20px;
    }

    .card4 {
      width: 95%;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
      gap: 40px;

      .comment{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .comment > div {
        display: flex;
        align-items: center;
        gap: 20px;

        .acronym {
          background-color: var(--brand-1);
          width: 32px;
          height: 32px;
          border-radius: 150px;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: var(--weight-700);
        }
        .name {
          color: var(--black);
          font-size: 16px;
          font-weight: var(--weight-400);
        }

        span {
          font-size: 12px;
          color: rgba(134, 142, 150, 1);
        }
      }
    }

    .card5 {
      width: 95%;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        display: flex;
        align-items: center;
        gap: 15px;

        .acronym {
          background-color: var(--brand-1);
          width: 32px;
          height: 32px;
          border-radius: 150px;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: var(--weight-700);
        }
        .name {
          color: var(--black);
          font-size: 16px;
          font-weight: var(--weight-400);
        }
      }

      .divpublication {

        border: 1px solid var(--grey-6);
        border-radius: 4px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .publication {
          background-color: transparent;
          border-radius: 4px;
          color: var(--black);
          border: none;
          padding: 10px;
          outline: 0;
        }

        
      }

      span {
        background-color: var(--grey-6);
        color: var(--grey-2);
        border-radius: 10px;
        padding: 5px;
        font-size: 12px;
      }
    }
  }

  .secLeft {
    width: 35%;

    .card6 {
      background-color: var(--white);
      height: 330px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 10px;

      .minCar {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-between;

        img {
          width: 25%;
          height: 108px;
          border-radius: 4px;
        }
      }
    }

    .card7 {
      display: flex;
      flex-direction: column;
      background-color: var(--white);
      height: 420px;
      margin-top: 30px;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      gap: 20px;

      .acronym2 {
        background-color: var(--brand-1);
        width: 104px;
        height: 104px;
        border-radius: 200px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: var(--weight-500);
      }
      .name2 {
        font-size: 20px;
        font-weight: var(--weight-600);
      }
      .text1 {
        font-size: 16px;
        font-weight: var(--weight-400);
      }

      .allComment{
        width: 60%;
      }
    }
  }
`;
