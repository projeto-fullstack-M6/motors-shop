import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ISelect {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  defaultValue: string | undefined;
  placeholder: string;
  disabled: boolean;
  onChange?: (e: any) => Promise<void> | any;
  children: React.ReactNode;
}
