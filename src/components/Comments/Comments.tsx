import { useContext, useEffect, useState } from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledComments } from "./style";
import { UserContext } from "../../providers/UserContext";

export const Comments = ({
	comment,
	commentUser,
	date,
	id,
	commentUserId,
}: any) => {
	const { deleteComment, userLoginAdminInfo } = useContext(UserContext);
	const [isItSameUser, setIsItSameUser] = useState(false);

	useEffect(() => {
		setIsItSameUser(commentUserId === userLoginAdminInfo?.id);
	}, [userLoginAdminInfo]);

	return (
		<StyledComments>
			<div className="comment-user">
				<StyledTitle tag="p" fontSize="body-2-500" className="acronym">
					{commentUser?.name.charAt(0)}
				</StyledTitle>

				<StyledTitle tag="p" fontSize="body-2-500" color="grey-1">
					{commentUser?.name}
				</StyledTitle>

				<StyledTitle tag="span" fontSize="body-2-400" color="grey-3">
					{date}
				</StyledTitle>
				{isItSameUser ? (
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
				) : (
					<></>
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
