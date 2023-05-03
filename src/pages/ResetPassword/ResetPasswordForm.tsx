import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { UserContext } from "../../providers/UserContext";
import { Input } from "../../components/Input/Input";

import { IForgotPasswordPage } from "../../interfaces/userSchema.interface";
import { forgotPasswordPageSchema } from "../../serializers";

import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledTitle } from "../../styles/typography";
import { NotFound } from "../../components/NotFound/NotFound";

export const ResetPasswordForm = () => {
  const { userChangePassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordPage>({
    resolver: zodResolver(forgotPasswordPageSchema),
  });

  const { token } = useParams();

  return (
    <>
      {token ? (
        <StyledForm
          onSubmit={handleSubmit((data) => userChangePassword(data, token))}
        >
          <StyledTitle
            tag="h3"
            fontSize="body-2-500"
            color="black"
            align="align-self-start"
          >
            Informações Pessoais
          </StyledTitle>

          <Input
            label="Nova senha"
            type="password"
            register={register("password")}
            defaultValue=""
            placeholder="Digitar senha"
            error={errors.password}
          />

          <Input
            label="Confirmar nova senha"
            type="password"
            register={register("confirmPassword")}
            defaultValue=""
            placeholder="Digitar senha"
            error={errors.confirmPassword}
          />

          <StyledButton
            width="one"
            height="one"
            buttonStyled="blue"
            type="submit"
          >
            Trocar Senha
          </StyledButton>
        </StyledForm>
      ) : (
        <NotFound />
      )}
    </>
  );
};
