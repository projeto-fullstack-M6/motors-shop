import { IInput } from "../interfaces/input.interface";

export const Input = ({
  label,
  type,
  register,
  error,
  defaultValue,
}: IInput) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} {...register} defaultValue={defaultValue} />
      <p>{error ? error.message : null}</p>
    </>
  );
};
