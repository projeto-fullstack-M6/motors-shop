import { IInput } from "../interfaces/Style/input.interface";
import { StyledDivInput, StyledInput, StyledLabel } from "../styles/input";

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
			{error ? <p>error.message</p> : null}
		</StyledDivInput>
	);
};
