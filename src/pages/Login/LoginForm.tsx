// import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";

import { Input } from "../../components/Input";

import { StyledForm } from "../../styles/form";
import { StyledButton } from "../../styles/button";
import { StyledLinkRegister } from "../../styles/link";
import { StyledTitle } from "../../styles/typography";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <StyledForm>
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
        <StyledTitle
          tag="span"
          fontSize="body-2-500"
          color="grey-2"
          align="align-self-end"
        >
          Esqueci minha senha
        </StyledTitle>

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
  );
};
