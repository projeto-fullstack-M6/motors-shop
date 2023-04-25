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

export const ModalEditAddress = () => {
  const { updateUser, setShowEditAddress, user } = useContext(UserContext);

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
            Editar Endereço
          </StyledTitle>
          <button type="button" onClick={() => setShowEditAddress(false)}>
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
            Informações de Endereço
          </StyledTitle>

          <StyledForm onSubmit={handleSubmit((data) => updateUser(data))}>
            <Input
              label="CEP"
              type="text"
              register={register("address.zipcode")}
              defaultValue={user?.address.zipcode}
              placeholder="00000-000"
              error={errors.address?.zipcode as FieldError}
            />

            <div className="div-register">
              <Input
                label="Estado"
                type="text"
                register={register("address.state")}
                defaultValue={user?.address.state}
                placeholder="Digitar Estado"
                error={errors.address?.state as FieldError}
              />

              <Input
                label="Cidade"
                type="text"
                register={register("address.city")}
                defaultValue={user?.address.city}
                placeholder="Digitar Cidade"
                error={errors.address?.city as FieldError}
              />
            </div>

            <Input
              label="Rua"
              type="text"
              register={register("address.street")}
              defaultValue={user?.address.street}
              placeholder="Digitar Rua"
              error={errors.address?.street as FieldError}
            />

            <div className="div-register">
              <Input
                label="Número"
                type="text"
                register={register("address.number")}
                defaultValue={user?.address.number}
                placeholder="Digitar Número"
                error={errors.address?.number as FieldError}
              />

              <Input
                label="Complemento"
                type="text"
                register={register("address.complement")}
                defaultValue={user?.address.complement}
                placeholder="Ex: apart 307"
                error={errors.address?.complement as FieldError}
              />
            </div>
          </StyledForm>

          <div className="div-modal-button">
            <StyledButton width="six" height="one" buttonStyled="grey-black">
              Cancelar
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
