import { FieldError, useForm } from "react-hook-form";
import { Input } from "../../Input/Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { StyledSectionModal } from "../style";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCommentSchema } from "../../../serializers";
import { IAdUpdate } from "../../../interfaces/adSchema.interface";
import * as S from "../../../styles/divs";
import { useContext, useState } from "react";
import { AdminContext } from "../../../providers/AdminContext";
import { Select } from "../../Select/Select";
import { UserContext } from "../../../providers/UserContext";

const ModalEditComment = ({
	isOpen,
	setIsOpen,
	currentText,
	userId,
	commentId,
}: any) => {
	const { loading, updateComment } = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: zodResolver(updateCommentSchema),
	});

	const updateCommentModalFunction = async (data: any) => {
		await updateComment(data, commentId);

		setIsOpen(!isOpen);
	};

	return (
		<StyledSectionModal>
			<div className="div-modal">
				<div className="div-modal-header">
					<h1>Editar comentário</h1>
					<button type="button" onClick={() => setIsOpen(!isOpen)}>
						<AiOutlineClose />
					</button>
				</div>
				<div className="div-modal-form">
					<StyledForm
						onSubmit={handleSubmit(updateCommentModalFunction)}
					>
						<Input
							label="Descrição"
							type="text"
							register={register("text")}
							defaultValue={currentText}
							placeholder=""
							error={errors.text as FieldError}
						/>
						<div className="div-modal-button">
							<StyledButton
								width="five"
								height="one"
								buttonStyled="blue"
								type="submit"
								disabled={loading ? true : false}
							>
								{loading ? "Salvando..." : "Salvar alterações"}
							</StyledButton>
						</div>
					</StyledForm>
				</div>
			</div>
		</StyledSectionModal>
	);
};

export default ModalEditComment;
