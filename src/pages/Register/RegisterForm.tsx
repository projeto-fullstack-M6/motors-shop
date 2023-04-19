import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";

import { UserContext } from "../../providers/UserContext";

import { Input } from "../../components/Input";

import { createUserSchema } from "../../serializers";
import { IUserRegister } from "../../interfaces/userSchema.interface";

import { StyledForm } from "../../styles/form";
import { StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [isBuyer, setIsBuyer] = useState(true);

  const handleBuyerClick = () => {
    setIsBuyer(true);
  };

  const handleSellerClick = () => {
    setIsBuyer(false);
  };

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: zodResolver(createUserSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
      <StyledTitle
        tag="h3"
        fontSize="body-2-500"
        color="black"
        align="align-self-start"
      >
        Informações Pessoais
      </StyledTitle>

      <Input
        label="Nome"
        type="text"
        register={register("name")}
        defaultValue=""
        placeholder="Ex: Antonio Magalhães"
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        register={register("email")}
        defaultValue=""
        placeholder="Ex: antonio.magalhaes@gmail.com"
        error={errors.email}
      />

      <Input
        label="CPF"
        type="text"
        register={register("cpf")}
        defaultValue=""
        placeholder="000.000.000-00"
        error={errors.cpf}
      />

      <Input
        label="Celular"
        type="text"
        register={register("cellPhone")}
        defaultValue=""
        placeholder="(DD) 90000-0000"
        error={errors.cellPhone}
      />

      <Input
        label="Data de nascimento"
        type="text"
        register={register("birthdate")}
        defaultValue=""
        placeholder="00/00/0000"
        error={errors.birthdate}
      />

      <Input
        label="Descrição"
        type="text"
        register={register("description")}
        defaultValue=""
        placeholder="Digitar descrição"
        error={errors.description}
      />

      <StyledTitle
        tag="h3"
        fontSize="body-2-500"
        color="black"
        align="align-self-start"
      >
        Infomações de endereço
      </StyledTitle>

      <Input
        label="CEP"
        type="text"
        register={register("address.zipcode")}
        defaultValue=""
        placeholder="00000-000"
        error={errors.address?.zipcode}
      />

      <div className="div-register">
        <Input
          label="Estado"
          type="text"
          register={register("address.state")}
          defaultValue=""
          placeholder="Digitar Estado"
          error={errors.address?.state}
        />

        <Input
          label="Cidade"
          type="text"
          register={register("address.city")}
          defaultValue=""
          placeholder="Digitar Cidade"
          error={errors.address?.city}
        />
      </div>

      <Input
        label="Rua"
        type="text"
        register={register("address.street")}
        defaultValue=""
        placeholder="Digitar Rua"
        error={errors.address?.street}
      />

      <div className="div-register">
        <Input
          label="Número"
          type="text"
          register={register("address.number")}
          defaultValue=""
          placeholder="Digitar Número"
          error={errors.address?.number}
        />

        <Input
          label="Complemento"
          type="text"
          register={register("address.complement")}
          defaultValue=""
          placeholder="Ex: apart 307"
          error={errors.address?.complement}
        />
      </div>

      <StyledTitle
        tag="h3"
        fontSize="body-2-500"
        color="black"
        align="align-self-start"
      >
        Tipo de conta
      </StyledTitle>

      <div className="div-register">
        <StyledButton
          width="six"
          height="one"
          buttonStyled={isBuyer ? "blue" : "border-grey"}
          type="button"
          onClick={() => {
            handleBuyerClick();
            unregister("isBuyer", {});
            register("isBuyer", { value: true });
          }}
        >
          Comprador
        </StyledButton>
        <StyledButton
          width="six"
          height="one"
          buttonStyled={!isBuyer ? "blue" : "border-grey"}
          type="button"
          onClick={() => {
            handleSellerClick();
            unregister("isBuyer", {});
            register("isBuyer", { value: false });
          }}
        >
          Anunciante
        </StyledButton>
      </div>

      <Input
        label="Senha"
        type="password"
        register={register("password")}
        defaultValue=""
        placeholder="Digitar senha"
        error={errors.password}
      />

      <Input
        label="Confirmar senha"
        type="password"
        register={register("confirmPassword")}
        defaultValue=""
        placeholder="Digitar senha"
        error={errors.confirmPassword}
      />

      <StyledButton width="one" height="one" buttonStyled="blue" type="submit">
        Finalizar Cadastro
      </StyledButton>
    </StyledForm>
  );
};
