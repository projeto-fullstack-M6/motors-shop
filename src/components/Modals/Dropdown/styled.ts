import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 10;

  display: flex;
  align-items: center;
  width: 16%;
  min-width: 165px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-15);

    width: 100%;
    height: fit-content;
    background-color: var(--grey-9);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius-4);
    padding: 20px 20px;
  }
`;
