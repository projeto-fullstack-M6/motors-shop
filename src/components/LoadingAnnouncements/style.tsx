import styled from "styled-components";

export const StyledAnimation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;

  > p {
    max-height: 5%;
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    color: var(--brand-1);
    animation: showLetters 2s infinite ease-in-out alternate-reverse;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > img {
    height: 60%;
    width: 100%;
    object-fit: scale-down;
  }

  @keyframes showLetters {
    0% {
      width: 0%;
    }

    100% {
      width: 35%;
    }
  }
`;
