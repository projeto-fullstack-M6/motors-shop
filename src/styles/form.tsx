import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-20);
  padding: 20px 0;

  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-20);
  }

  .div-register{
    display: flex;
    gap: var(--gap-10);
  }
`;
