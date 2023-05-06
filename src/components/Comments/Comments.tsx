import { StyledTitle } from "../../styles/typography";
import { StyledComments } from "./style";

export const Comments = ({ comment, user, date }: any) => {
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
