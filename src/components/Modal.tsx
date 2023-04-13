import { FieldError, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { StyledButton } from "../styles/button";
import { StyledForm } from "../styles/form";
import { StyledSectionModal } from "../styles/section";
import { AiOutlineClose } from "react-icons/ai";

// É APENAS UM EXEMPLO DO QUE EU PENSEI PARA O MODAL
// A ESTILIZAÇÃO DELE ESTÁ EM: STYLES > SECTION.TS 

export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <StyledSectionModal>
      <div className="div-modal">
        <div className="div-modal-header">
          <h1>Criar anúncio</h1>
          <button type="button">
            <AiOutlineClose />
          </button>
        </div>
        <div className="div-modal-form">
          <h2>Informações do veículo</h2>
          <StyledForm>
            <Input
              label="E-mail"
              type="email"
              register={register("email")}
              defaultValue=""
              placeholder="Seu e-mail"
              error={errors.email as FieldError}
            />
            <Input
              label="Nome Completo"
              type="text"
              register={register("name")}
              defaultValue=""
              placeholder="Seu nome"
              error={errors.name as FieldError}
            />
            <Input
              label="Password"
              type="password"
              register={register("password")}
              defaultValue=""
              placeholder="Sua senha"
              error={errors.password as FieldError}
            />
          </StyledForm>
          <div className="div-modal-button">
            <StyledButton width="seven" height="one" buttonStyled="grey-black">
              Cancelar
            </StyledButton>
            <StyledButton width="five" height="one" buttonStyled="disable">
              Criar Anuncio
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledSectionModal>
  );
};
