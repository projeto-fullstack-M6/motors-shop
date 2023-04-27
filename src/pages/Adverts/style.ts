import styled from "styled-components";

export const StyledAdvertDetailing = styled.div`
  background-color: var(--grey-8);
  position: relative;
  z-index: -2;

  .background-blue {
    width: 100vw;
    height: 60vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: var(--brand-1);
  }

  .advert {
    width: 80%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    padding: 30px 0;

    .secRight {
      width: 65%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--gap-20);

      .card1 {
        background-color: var(--grey-10);
        width: 95%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-4);

        img {
          width: 100%;
          height: 100%;
          padding: 10px;
          object-fit: cover;
        }
      }

      .card2 {
        width: 95%;
        padding: 25px 40px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: var(--gap-20);
        border-radius: var(--border-radius-4);
        background-color: var(--grey-10);

        div {
          display: flex;
          justify-content: space-between;

          .km {
            display: flex;
            gap: var(--gap-15);
          }
        }
      }

      .card3 {
        width: 95%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: justify;
        padding: 25px 40px;
        gap: var(--gap-20);
        background-color: var(--grey-10);
        border-radius: var(--border-radius-4);
      }

      .card4 {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 25px 40px;
        gap: var(--gap-20);
        background-color: var(--grey-10);
        border-radius: var(--border-radius-4);
      }

      .card5 {
        width: 95%;
        border-radius: var(--border-radius-4);
        padding: 25px 40px;
        background-color: var(--grey-10);
        display: flex;
        flex-direction: column;
        gap: var(--gap-20);

        div {
          display: flex;
          align-items: center;
          gap: var(--gap-20);

          .acronym {
            background-color: var(--random-6);
            width: 32px;
            height: 32px;
            border-radius: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .divpublication {
          border: 1px solid var(--grey-7);
          border-radius: var(--border-radius-4);
          display: flex;
          justify-content: space-between;
          padding: 10px;
          height: 100%;

          .publication {
            width: 80%;
            height: 100%;
            font-size: var(--size-body-2);
            font-weight: var(--weight-400);
            font-family: var(--font-family-inter);
            color: var(--grey-3);
            border-radius: var(--border-radius-4);
            padding: 10px 0;
            text-align: justify;

            &:focus {
              outline: 0;
            }
          }

          .align {
            align-self: self-end;
          }
        }

        .span-tag {
          background-color: var(--grey-7);
          border-radius: 15px;
          padding: 5px 10px;
        }
      }
    }

    .secLeft {
      width: 35%;

      .card6 {
        background-color: var(--grey-10);
        height: 370px;
        border-radius: var(--border-radius-4);
        display: flex;
        flex-direction: column;

        .minCar {
          display: flex;
          flex-direction: row;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;

          img {
            width: 25%;
            height: 108px;
            border-radius: var(--border-radius-4);
          }
        }
      }

      .card7 {
        display: flex;
        flex-direction: column;
        background-color: var(--grey-10);
        height: 420px;
        margin-top: 30px;
        border-radius: var(--border-radius-4);
        justify-content: center;
        align-items: center;
        padding: 25px 40px;
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
      }
    }
  }
`;
