import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../Input";

import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../../../styles/section";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

export const ModalEditProfile = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({ resolver: zodResolver() });

  return (
    <StyledSectionModal>
      <div className="div-modal">
        <div className="div-modal-header">
          <h1>Editar Perfil</h1>
          <button type="button">
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
            Informações Pessoais
          </StyledTitle>

          <StyledForm>
            <Input
              label="Nome"
              type="text"
              register={register("name")}
              defaultValue=""
              placeholder="Ex: Antonio Magalhães"
              error={errors.name as FieldError}
            />

            <Input
              label="Email"
              type="email"
              register={register("email")}
              defaultValue=""
              placeholder="Ex: antonio.magalhaes@gmail.com"
              error={errors.email as FieldError}
            />

            <Input
              label="CPF"
              type="text"
              register={register("cpf")}
              defaultValue=""
              placeholder="000.000.000-00"
              error={errors.cpf as FieldError}
            />

            <Input
              label="Celular"
              type="text"
              register={register("cellPhone")}
              defaultValue=""
              placeholder="(DD) 90000-0000"
              error={errors.cellPhone as FieldError}
            />

            <Input
              label="Data de nascimento"
              type="text"
              register={register("birthdate")}
              defaultValue=""
              placeholder="00/00/0000"
              error={errors.birthdate as FieldError}
            />

            <Input
              label="Descrição"
              type="text"
              register={register("description")}
              defaultValue=""
              placeholder="Digitar descrição"
              error={errors.description as FieldError}
            />
          </StyledForm>

          <div className="div-modal-button">
            <StyledButton width="six" height="one" buttonStyled="grey-black">
              Cancelar
            </StyledButton>
            
            <StyledButton width="six" height="one" buttonStyled="feedback-alert">
              Excluir Perfil
            </StyledButton>

            <StyledButton width="five" height="one" buttonStyled="blue">
              Salvar Alterações
            </StyledButton>
          </div>

        </div>
      </div>
    </StyledSectionModal>
  );
};
