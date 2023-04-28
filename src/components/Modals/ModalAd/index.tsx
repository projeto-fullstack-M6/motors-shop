import { FieldError, useForm } from "react-hook-form";
import { Input } from "../../Input/Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { StyledSectionModal } from "../style";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { adCreateSchema } from "../../../serializers";
import { IAdRegister } from "../../../interfaces/adSchema.interface";
import * as S from "../../../styles/divs";
import { useContext } from "react";
import { AdminContext } from "../../../providers/AdminContext";
import { Select } from "../../Select/Select";
import { UploadWidget } from "../../Upload/UploadWidget";

const ModalAds = () => {
  const {
    setIsAnnouncementModalActive,
    handleNewAnnouncement,
    getAllCarsForAnnouncements,
    getCarInfoClosedOption,
    brandOptions,
    carsOptions,
    carYearClosedOption,
    carFuelClosedOption,
    carFipePriceClosedOption,
  } = useContext(AdminContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdRegister>({
    resolver: zodResolver(adCreateSchema),
  });

  return (
    <StyledSectionModal>
      <div className="div-modal">
        <div className="div-modal-header">
          <h1>Criar anúncio</h1>
          <button
            type="button"
            onClick={() => setIsAnnouncementModalActive(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="div-modal-form">
          <h2>Informações do veículo</h2>
          <StyledForm onSubmit={handleSubmit(handleNewAnnouncement)}>
            <Select
              register={register("brand")}
              label="Marcas"
              defaultValue=""
              onChange={(e) => getAllCarsForAnnouncements(e.target.value)}
              placeholder="Mercedes"
              error={errors.brand as FieldError}
              disabled={brandOptions?.length === 0 ? true : false}
            >
              {brandOptions?.length === 0
                ? "Nenhuma marca registrada para cadastro"
                : brandOptions?.map((brand: any) => (
                    <option key={brand}>{brand}</option>
                  ))}
            </Select>
            <Select
              register={register("model")}
              label="Modelo"
              defaultValue=""
              disabled={carsOptions?.length === 0 ? true : false}
              placeholder="A200 CGI ADVANCE SEDAN"
              error={errors.model as FieldError}
              onChange={(e) => getCarInfoClosedOption(e.target.value)}
            >
              <>
                <option>--</option>
                {carsOptions?.map(({ id, name }: any) => (
                  <option key={id}>{name}</option>
                ))}
              </>
            </Select>
            <S.RowDiv>
              <Select
                register={register("year")}
                label="Ano"
                defaultValue=""
                placeholder="2018"
                error={errors.year as FieldError}
                disabled={carYearClosedOption?.length === 0 ? true : false}
              >
                <option>{carYearClosedOption}</option>
              </Select>
              <Select
                register={register("fuel")}
                label="Combustível"
                defaultValue=""
                placeholder="Gasolina"
                error={errors.fuel as FieldError}
                disabled={carFuelClosedOption?.length === 0 ? true : false}
              >
                <option>{carFuelClosedOption}</option>
              </Select>
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
              <Select
                register={register("fipePrice")}
                label="Preço Tabela Fipe"
                defaultValue=""
                placeholder="R$ 48.000,00"
                error={errors.fipePrice as FieldError}
                disabled={carFipePriceClosedOption?.length === 0 ? true : false}
              >
                <option>{carFipePriceClosedOption}</option>
              </Select>
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
            <UploadWidget />
            <div className="div-modal-button">
              <StyledButton
                width="seven"
                height="one"
                buttonStyled="grey-black"
                onClick={() => setIsAnnouncementModalActive(false)}
              >
                Cancelar
              </StyledButton>
              <StyledButton
                width="five"
                height="one"
                buttonStyled="blue"
                type="submit"
              >
                Criar Anuncio
              </StyledButton>
            </div>
          </StyledForm>
        </div>
      </div>
    </StyledSectionModal>
  );
};

export default ModalAds;
