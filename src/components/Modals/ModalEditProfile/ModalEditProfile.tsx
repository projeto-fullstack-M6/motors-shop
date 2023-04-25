import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";

import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input";

import { IUserUpdate } from "../../../interfaces/userSchema.interface";
import { updateUserSchema } from "../../../serializers";

import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../../../styles/section";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

export const ModalEditProfile = () => {
  const { updateUser, deleteUser, setShowEditUser, user } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IUserUpdate>({ resolver: zodResolver(updateUserSchema) });

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
            Editar Perfil
          </StyledTitle>
          <button type="button" onClick={() => setShowEditUser(false)}>
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

          <StyledForm onSubmit={handleSubmit((data) => updateUser(data))}>
            <Input
              label="Nome"
              type="text"
              register={register("name")}
              defaultValue={user?.name}
              placeholder="Ex: Antonio Magalhães"
              error={errors.name as FieldError}
            />

            <Input
              label="Email"
              type="email"
              register={register("email")}
              defaultValue={user?.email}
              placeholder="Ex: antonio.magalhaes@gmail.com"
              error={errors.email as FieldError}
            />

            <Input
              label="CPF"
              type="text"
              register={register("cpf")}
              defaultValue={user?.cpf}
              placeholder="000.000.000-00"
              error={errors.cpf as FieldError}
            />

            <Input
              label="Celular"
              type="text"
              register={register("cellPhone")}
              defaultValue={user?.cellPhone}
              placeholder="(DD) 90000-0000"
              error={errors.cellPhone as FieldError}
            />

            <Input
              label="Data de nascimento"
              type="text"
              register={register("birthdate")}
              defaultValue={user?.birthdate}
              placeholder="00/00/0000"
              error={errors.birthdate as FieldError}
            />

            <Input
              label="Descrição"
              type="text"
              register={register("description")}
              defaultValue={user?.description!}
              placeholder="Digitar descrição"
              error={errors.description as FieldError}
            />
          </StyledForm>

          <div className="div-modal-button">
            <StyledButton width="six" height="one" buttonStyled="grey-black">
              Cancelar
            </StyledButton>

            <StyledButton
              width="six"
              height="one"
              buttonStyled="feedback-alert"
              onSubmit={() => deleteUser()}
            >
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
