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
        justify-content: end;
        gap: var(--gap-20);
        border-radius: var(--border-radius-4);
        background-color: var(--grey-10);
        
        div {
          padding-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .km {
            display: flex;
            justify-content: center;
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

        .description {
          line-height: 28px;
          text-align: justify;
        }
      }

      .card4 {
        width: 95%;
        height: fit-content;
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
            height: 128px;
            font-size: var(--size-body-2);
            font-weight: var(--weight-400);
            font-family: var(--font-family-inter);
            color: var(--grey-3);
            border-radius: var(--border-radius-4);
            padding: 10px 0;
            text-align: justify;
            resize: none;

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
        display: flex;
        flex-direction: column;
        padding: 25px 40px;
        background-color: var(--grey-10);
        border-radius: var(--border-radius-4);
        gap: var(--gap-20);

        .minCar {
          display: flex;
          gap: var(--gap-10);
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;

          img {
            width: 108px;
            height: 108px;
            object-fit: cover;
            border-radius: var(--border-radius-4);

            @media (max-width: 400px) {
              width: 90px;
              height: 90px;
            }
          }
        }
      }

      .card7 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        margin-top: 30px;
        background-color: var(--grey-10);
        border-radius: var(--border-radius-4);
        padding: 25px 40px;
        gap: 20px;

        .acronym-bio {
          width: 104px;
          height: 104px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          background-color: var(--brand-1);
          font-size: var(--size-h5);
          font-weight: var(--weight-500);
          border-radius: var(--border-radius-150);
        }

        .text-bio {
          line-height: 28px;
          text-align: justify;
        }
      }
    }
  }
`;
