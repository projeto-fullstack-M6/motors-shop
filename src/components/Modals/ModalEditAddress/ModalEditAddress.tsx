import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";

import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/Input";

import { IUserResponse } from "../../../interfaces/userSchema.interface";
import { updateUserSchema } from "../../../serializers";

import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../style";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

export const ModalEditAddress = () => {
  const { updateUser, setShowEditAddress, userLoginAdminInfo } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserResponse>({ resolver: zodResolver(updateUserSchema) });

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
              defaultValue={userLoginAdminInfo?.address?.zipcode}
              placeholder="00000-000"
            />

            <div className="div-register">
              <Input
                label="Estado"
                type="text"
                register={register("address.state")}
                defaultValue={userLoginAdminInfo?.address?.state}
                placeholder="Digitar Estado"
              />

              <Input
                label="Cidade"
                type="text"
                register={register("address.city")}
                defaultValue={userLoginAdminInfo?.address?.city}
                placeholder="Digitar Cidade"
              />
            </div>

            <Input
              label="Rua"
              type="text"
              register={register("address.street")}
              defaultValue={userLoginAdminInfo?.address?.street}
              placeholder="Digitar Rua"
            />

            <div className="div-register">
              <Input
                label="Número"
                type="text"
                register={register("address.number")}
                defaultValue={userLoginAdminInfo?.address?.number}
                placeholder="Digitar Número"
              />

              <Input
                label="Complemento"
                type="text"
                register={register("address.complement")}
                defaultValue={userLoginAdminInfo?.address?.complement}
                placeholder="Ex: apart 307"
              />
            </div>

            <div className="div-modal-button">
              <StyledButton
                width="six"
                height="one"
                buttonStyled="grey-black"
                font="two"
                type="button"
                onClick={() => setShowEditAddress(false)}
              >
                Cancelar
              </StyledButton>

              <StyledButton
                width="five"
                height="one"
                buttonStyled="blue"
                font="two"
              >
                Salvar Alterações
              </StyledButton>
            </div>
          </StyledForm>
        </div>
      </div>
    </StyledSectionModal>
  );
};
