import { IInput } from "../../interfaces/Style/input.interface";
import { StyledDivInput, StyledInput, StyledLabel } from "./style";
import { StyledTitle } from "../../styles/typography";

export const Input = ({
  label,
  type,
  register,
  error,
  defaultValue,
  placeholder,
}: IInput) => {
  return (
    <StyledDivInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        {...register}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {error ? (
        <StyledTitle tag="span" fontSize="body-2-400" color="blue">
          {error.message}
        </StyledTitle>
      ) : null}
    </StyledDivInput>
  );
};
