import { useContext } from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledComments } from "./style";
import { UserContext } from "../../providers/UserContext";

export const Comments = ({ comment, user, date, id, userId }: any) => {
	const { deleteComment } = useContext(UserContext);
	return (
		<StyledComments>
			<div className="comment-user">
				<StyledTitle tag="p" fontSize="body-2-500" className="acronym">
					{user?.name.charAt(0)}
				</StyledTitle>

				<StyledTitle tag="p" fontSize="body-2-500" color="grey-1">
					{user?.name}
				</StyledTitle>

				<StyledTitle tag="span" fontSize="body-2-400" color="grey-3">
					{date}
				</StyledTitle>
				{userId === user?.id && (
					<>
						<button
							onClick={() => {
								console.log(id);
							}}
						>
							Editar
						</button>
						<button
							onClick={() => {
								deleteComment(id);
							}}
						>
							Excluir
						</button>
					</>
				)}
			</div>
			<StyledTitle
				tag="p"
				fontSize="body-2-400"
				color="grey-2"
				className="comment-text"
			>
				{comment}
			</StyledTitle>
		</StyledComments>
	);
};
