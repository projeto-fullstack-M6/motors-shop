import styled from "styled-components";

export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--gap-10);
  height: fit-content;

  .comment-user {
    display: flex;
    align-items: center;
    gap: var(--gap-15);
  }

  .acronym {
    width: 32px;
    height: 32px;
    border-radius: 150px;
    background-color: var(--random-7);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comment-text {
    text-align: justify;
    line-height: 24px;
  }
`;
