import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";

import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/Input";

import { userForgotPasswordSchema } from "../../../serializers/user.schema";
import { IUserForgotPassword } from "../../../interfaces/userSchema.interface";

import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../style";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

export const ForgotPassword = () => {
  const { setForgotPassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForgotPassword>({
    resolver: zodResolver(userForgotPasswordSchema),
  });

  return (
    <StyledSectionModal>
      <div className="div-modal">
        <div className="div-modal-header">
          <StyledTitle
            tag="h2"
            fontSize="heading-7-500"
            color="grey-1"
            align="align-self-start"
          >
            Recuperação de Senha
          </StyledTitle>

          <button type="button" onClick={() => setForgotPassword(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="div-modal-form">
          <StyledTitle
            tag="h3"
            fontSize="body-2-500"
            color="black"
            align="align-self-start"
          >
            Informação do usuário
          </StyledTitle>

          <StyledForm>
            <Input
              label="E-mail"
              type="email"
              register={register("email")}
              defaultValue=""
              placeholder="Seu e-mail"
              error={errors.email as FieldError}
            />

            <div className="div-modal-button">
              <StyledButton
                width="seven"
                height="one"
                buttonStyled="grey-black"
                font="two"
                onClick={() => setForgotPassword(false)}
              >
                Cancelar
              </StyledButton>

              <StyledButton
                width="five"
                height="one"
                buttonStyled="blue"
                font="two"
              >
                Enviar
              </StyledButton>
            </div>
          </StyledForm>
        </div>
      </div>
    </StyledSectionModal>
  );
};
