import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../Input";

import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../../../styles/section";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

export const ModalEditAddress = () => {
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
            Informações de Endereço
          </StyledTitle>

          <StyledForm>
            <Input
              label="CEP"
              type="text"
              register={register("address.zipcode")}
              defaultValue=""
              placeholder="00000-000"
              error={errors.zipcode as FieldError}
            />

            <div className="div-register">
              <Input
                label="Estado"
                type="text"
                register={register("address.state")}
                defaultValue=""
                placeholder="Digitar Estado"
                error={errors.state as FieldError}
              />

              <Input
                label="Cidade"
                type="text"
                register={register("address.city")}
                defaultValue=""
                placeholder="Digitar Cidade"
                error={errors.city as FieldError}
              />
            </div>

            <Input
              label="Rua"
              type="text"
              register={register("address.street")}
              defaultValue=""
              placeholder="Digitar Rua"
              error={errors.street as FieldError}
            />

            <div className="div-register">
              <Input
                label="Número"
                type="text"
                register={register("address.number")}
                defaultValue=""
                placeholder="Digitar Número"
                error={errors.number as FieldError}
              />

              <Input
                label="Complemento"
                type="text"
                register={register("address.complement")}
                defaultValue=""
                placeholder="Ex: apart 307"
                error={errors.complement as FieldError}
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
