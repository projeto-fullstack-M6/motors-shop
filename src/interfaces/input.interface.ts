import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInput {
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  defaultValue: string | undefined;
  placeholder: string;
}
