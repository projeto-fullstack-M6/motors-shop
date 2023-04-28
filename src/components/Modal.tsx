import { FieldError, useForm } from "react-hook-form";
import { Input } from "./Input/Input";
import { StyledButton } from "../styles/button";
import { StyledForm } from "../styles/form";
import { StyledSectionModal } from "./Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email é um campo obrigatório")
    .email("Email inválido"),
  name: z.string().min(3),
  password: z.string().min(6),
});

// É APENAS UM EXEMPLO DO QUE EU PENSEI PARA O MODAL
// A ESTILIZAÇÃO DELE ESTÁ EM: STYLES > SECTION.TS

export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  type FormValues = z.infer<typeof schema>;

  const onSubmitFunc = (data: any) => {
    console.log(data);
  };
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
          <StyledForm onSubmit={handleSubmit(onSubmitFunc)}>
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
            <StyledButton width="five" height="one" buttonStyled="blue">
              Criar Anuncio
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledSectionModal>
  );
};
