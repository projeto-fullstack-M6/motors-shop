import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FieldError, useForm } from "react-hook-form";

import { UserContext } from "../../providers/UserContext";

import { Input } from "../../components/Input/Input";

import { IUserLogin } from "../../interfaces/userSchema.interface";
import { loginSchema } from "../../serializers";

import { StyledForm } from "../../styles/form";
import { StyledButton } from "../../styles/button";
import { StyledLinkRegister } from "../../styles/link";
import { StyledTitle } from "../../styles/typography";
import { ForgotPassword } from "../../components/Modals/ForgotPassword/ForgotPassword";

export const LoginForm = () => {
  const { forgotPassword, setForgotPassword, userLogin } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: zodResolver(loginSchema) });

  return (
    <>
      <StyledForm onSubmit={handleSubmit(userLogin)}>
        <Input
          label="Usuário"
          type="email"
          register={register("email")}
          defaultValue=""
          placeholder="Seu e-mail"
          error={errors.email as FieldError}
        />

        <Input
          label="Password"
          type="password"
          register={register("password")}
          defaultValue=""
          placeholder="Sua senha"
          error={errors.password as FieldError}
        />

        <div className="form-login">
          <StyledButton
            width="one"
            height="one"
            buttonStyled="transparent"
            font="two"
            type="button"
            onClick={() => setForgotPassword(true)}
          >
            Esqueci minha senha
          </StyledButton>

          <StyledButton width="one" height="one" buttonStyled="blue">
            Login
          </StyledButton>

          <StyledTitle
            tag="span"
            fontSize="body-2-400"
            color="grey-2"
            align="align-self-center"
          >
            Ainda não possui uma conta?
          </StyledTitle>

          <StyledLinkRegister to={"/register"} className="width-register">
            Cadastrar
          </StyledLinkRegister>
        </div>
      </StyledForm>

      {forgotPassword && <ForgotPassword />}
    </>
  );
};
