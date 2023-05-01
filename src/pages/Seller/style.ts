import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  color: var(--black);
  margin-bottom: 20px;
  gap: 30px;




  .card7 {
      display: flex;
      flex-direction: column;
      background-color: var(--white);
      height: 360px;
      margin: 0 auto;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      gap: 30px;

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

      > div{
        display: flex;
        align-items: center;
        gap: 20px;
      }
  }

  .card8 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }




`


export const Main = styled.main`

  background: linear-gradient(to bottom, rgba(69, 41, 230, 1) 20% , rgb(222, 226, 230) 20%);
  width: 100vw; 
`