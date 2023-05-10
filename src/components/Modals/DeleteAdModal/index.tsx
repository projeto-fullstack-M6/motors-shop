import { useContext } from "react";
import { StyledSectionModal } from "../style";
import { AiOutlineClose } from "react-icons/ai";
import { AdminContext } from "../../../providers/AdminContext";
import { StyledButton } from "../../../styles/button";

const ModalCofirmDeleteAd = () => {
  const {
    setConfirmDeleteAd,
    setIsEditAndDeleteAdModalActive,
    handleDeleteAnnouncement,
    deletingAd,
  } = useContext(AdminContext);

  const handleCloseModal = () => {
    setConfirmDeleteAd(false);
    setIsEditAndDeleteAdModalActive(true);
  };
  return (
    <StyledSectionModal>
      <div className="div-modal">
        <div className="div-modal-header">
          <h1>Excluir anúncio</h1>
          <button type="button" onClick={() => setConfirmDeleteAd(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <h1>Tem certeza que deseja remover esse anúncio?</h1>
        </div>
        <div className="div-modal-form">
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente este
            anúncio e removerá os dados dele de nossos servidores.
          </p>
        </div>
        <div className="div-modal-button-delete">
          <StyledButton
            width="seven"
            height="one"
            buttonStyled="grey-black"
            onClick={() => handleCloseModal()}
          >
            cancelar
          </StyledButton>
          <StyledButton
            width="seven"
            height="one"
            buttonStyled="feedback-alert"
            onClick={() => handleDeleteAnnouncement()}
            disabled={deletingAd ? true : false}
          >
            {deletingAd ? "Excluindo..." : "Sim, excluir anúncio"}
          </StyledButton>
        </div>
      </div>
    </StyledSectionModal>
  );
};

export default ModalCofirmDeleteAd;
