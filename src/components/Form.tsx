import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: zodResolver(userRegisterSerializer),
  });

  return (
    <form>
      <Input
        label="E-mail"
        type="email"
        register={register("email")}
        error={errors.email}
      />
    </form>
  );
};
