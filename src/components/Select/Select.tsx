import { ISelect } from "../../interfaces/Style/select.interface";
import {
  StyledDivSelect,
  StyledSelect,
  StyledSelectLabel,
} from "../Select/style";
import { StyledTitle } from "../../styles/typography";

export const Select = ({
  label,
  register,
  error,
  defaultValue,
  placeholder,
  onChange,
  children,
  disabled,
}: ISelect) => {
  return (
    <StyledDivSelect>
      <StyledSelectLabel>{label}</StyledSelectLabel>
      <StyledSelect
        {...register}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
      {error ? (
        <StyledTitle tag="span" fontSize="body-2-400" color="blue">
          {error.message}
        </StyledTitle>
      ) : null}
    </StyledDivSelect>
  );
};
