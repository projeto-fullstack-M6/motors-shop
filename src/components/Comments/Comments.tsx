import { StyledTitle } from "../../styles/typography";
import { StyledComments } from "./style";

export const Comments = () => {
  return (
    <StyledComments>
      <div className="comment-user">
        <StyledTitle tag="p" fontSize="body-2-500" className="acronym">
          PL
        </StyledTitle>

        <StyledTitle tag="p" fontSize="body-2-500" color="grey-1">
          Petrus Lobato
        </StyledTitle>

        <StyledTitle tag="span" fontSize="body-2-400" color="grey-3">
          há 3 dias
        </StyledTitle>
      </div>
      <StyledTitle tag="p" fontSize="body-2-400" color="grey-2" className="comment-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        aliquam, quas sint voluptas nobis laborum facere! Soluta illum
        temporibus voluptatem quae possimus aut accusamus quo. Consequatur
        corporis deleniti voluptatibus aut!
      </StyledTitle>
    </StyledComments>
  );
};
