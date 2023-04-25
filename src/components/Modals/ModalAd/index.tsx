import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../Input";

import { IAdRegister } from "../../../interfaces/adSchema.interface";
import { adCreateSchema } from "../../../serializers";

import * as S from "../../../styles/divs";
import { AiOutlineClose } from "react-icons/ai";
import { StyledSectionModal } from "../../../styles/section";
import { StyledForm } from "../../../styles/form";
import { StyledButton } from "../../../styles/button";
import { StyledTitle } from "../../../styles/typography";

const ModalAds = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdRegister>({
    resolver: zodResolver(adCreateSchema),
  });

  const onSubmitFunc = (data: any) => {
    console.log(data);
  };

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
            Criar anúncio
          </StyledTitle>
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
            Informações do veículo
          </StyledTitle>

          <StyledForm onSubmit={handleSubmit(onSubmitFunc)}>
            <Input
              label="Marca"
              type="text"
              register={register("brand")}
              defaultValue=""
              placeholder="Mercedes Benz"
              error={errors.brand as FieldError}
            />

            <Input
              label="Modelo"
              type="text"
              register={register("model")}
              defaultValue=""
              placeholder="A200 CGI ADVANCE SEDAN"
              error={errors.model as FieldError}
            />

            <S.RowDiv>
              <Input
                label="Ano"
                type="text"
                register={register("year")}
                defaultValue=""
                placeholder="2020"
                error={errors.year as FieldError}
              />
              <Input
                label="Combustível"
                type="text"
                register={register("fuel")}
                defaultValue=""
                placeholder="Gasolina"
                error={errors.fuel as FieldError}
              />
            </S.RowDiv>

            <S.RowDiv>
              <Input
                label="Quilometragem"
                type="text"
                register={register("km")}
                defaultValue=""
                placeholder="30.000"
                error={errors.km as FieldError}
              />
              <Input
                label="Cor"
                type="text"
                register={register("color")}
                defaultValue=""
                placeholder="Branco"
                error={errors.color as FieldError}
              />
            </S.RowDiv>

            <S.RowDiv>
              <Input
                label="Preço Tabela Fipe"
                type="text"
                register={register("fipePrice")}
                defaultValue=""
                placeholder="R$ 48.000,00"
                error={errors.fipePrice as FieldError}
              />
              <Input
                label="Preço"
                type="text"
                register={register("price")}
                defaultValue=""
                placeholder="R$ 50.000,00"
                error={errors.price as FieldError}
              />
            </S.RowDiv>

            <Input
              label="Descrição"
              type="text"
              register={register("description")}
              defaultValue=""
              placeholder="Veículo ótimo com apenas 30.000 km rodados."
              error={errors.description as FieldError}
            />
          </StyledForm>

          <Input
            label="Imagem da Capa"
            type="text"
            defaultValue=""
            placeholder="https://imagem.com.br"
          />
          <Input
            label="Imagem 1"
            type="text"
            defaultValue=""
            placeholder="https://imagem.com.br"
          />
          <Input
            label="Imagem 2"
            type="text"
            defaultValue=""
            placeholder="https://imagem.com.br"
          />
          <input type="file" />

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

export default ModalAds;
