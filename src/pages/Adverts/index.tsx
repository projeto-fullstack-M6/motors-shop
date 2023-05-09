import { Footer } from "../../components/Footer/Footer";

import { StyledButton } from "../../styles/button";

import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { UserContext } from "../../providers/UserContext";

import { Header } from "../../components/Header/Header";
import { Comments } from "../../components/Comments/Comments";

import { StyledAdvertDetailing } from "./style";

import { StyledTitle } from "../../styles/typography";

const Adverts = () => {
	const { carDetails } = useContext(AdminContext);
	const { userLoginAdminInfo, comments, getComments, newComment, loading } =
		useContext(UserContext);

	useEffect(() => {
		getComments(carDetails.id);
	}, []);

	const onSubmitFunc = (event: any) => {
		event.preventDefault();

		const comment = {
			text: event.target[0].value,
		};

		newComment(comment, carDetails.id);
	};

	return (
		<>
			<Header />

			<StyledAdvertDetailing>
				<div className="advert">
					<div className="background-blue"></div>

					<section className="secRight">
						<div className="card1">
							<img src={carDetails.images![0]} alt="" />
						</div>

						<div className="card2">
							<StyledTitle
								tag="h3"
								fontSize="heading-6-600"
								color="grey-1"
							>
								{carDetails.brand} - {carDetails.model}
							</StyledTitle>

							<div>
								<div className="km">
									<StyledButton
										width="eleven"
										height="three"
										buttonStyled="light-blue"
									>
										{carDetails.year}
									</StyledButton>

									<StyledButton
										width="eleven"
										height="three"
										buttonStyled="light-blue"
									>
										{carDetails.km} KM
									</StyledButton>
								</div>

								<StyledTitle
									tag="span"
									fontSize="heading-7-500"
									color="grey-1"
								>
									R$
									{parseFloat(
										carDetails.price
									).toLocaleString("pt-BR", {
										minimumFractionDigits: 2,
									})}
								</StyledTitle>
							</div>

							<StyledButton
								width="eight"
								height="two"
								buttonStyled="blue"
								font="two"
							>
								Comprar
							</StyledButton>
						</div>

						<div className="card3">
							<StyledTitle
								tag="h3"
								fontSize="heading-6-600"
								color="grey-1"
							>
								Descrição
							</StyledTitle>

							<StyledTitle
								tag="p"
								fontSize="body-1-400"
								color="grey-2"
								className="description"
							>
								{carDetails.description}
							</StyledTitle>
						</div>

						<div className="card4">
							<StyledTitle
								tag="h3"
								fontSize="heading-6-600"
								color="grey-1"
							>
								Comentários
							</StyledTitle>
							{comments.length ? (
								comments.map((comment: any, index: number) => (
									<Comments
										key={index}
										comment={comment.text}
										user={comment.user}
										date={comment.createdAt
											.slice(0, 10)
											.split("-")
											.reverse()
											.join("/")}
										id={comment.id}
										userId={comment.user.id}
									/>
								))
							) : (
								<sub>Ainda sem comentários...</sub>
							)}
						</div>

						<div className="card5">
							<div>
								<StyledTitle
									tag="p"
									fontSize="body-2-500"
									color="white"
									className="acronym"
								>
									{userLoginAdminInfo?.name.charAt(0)}
								</StyledTitle>
								<StyledTitle
									tag="p"
									fontSize="body-2-500"
									color="grey-1"
								>
									{userLoginAdminInfo?.name}
								</StyledTitle>
							</div>

							<form
								className="divpublication"
								onSubmit={onSubmitFunc}
							>
								<textarea
									className="publication"
									placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
								></textarea>

								<StyledButton
									width="eight"
									height="two"
									buttonStyled="blue"
									font="two"
									className="align"
								>
									Comentar
								</StyledButton>
							</form>

							<div>
								<StyledTitle
									tag="span"
									fontSize="span-tag"
									color="grey-3"
									className="span-tag"
								>
									Gostei Muito!
								</StyledTitle>

								<StyledTitle
									tag="span"
									fontSize="span-tag"
									color="grey-3"
									className="span-tag"
								>
									Incrivel!
								</StyledTitle>

								<StyledTitle
									tag="span"
									fontSize="span-tag"
									color="grey-3"
									className="span-tag"
								>
									Recomendarei para amigos!
								</StyledTitle>
							</div>
						</div>
					</section>

					<section className="secLeft">
						<div className="card6">
							<StyledTitle
								tag="h3"
								fontSize="heading-6-600"
								color="grey-1"
							>
								Fotos
							</StyledTitle>

							<div className="minCar">
								{carDetails.images?.map(
									(image: any, index: number) => (
										<img
											key={index}
											src={image}
											alt="carro"
										/>
									)
								)}
							</div>
						</div>

						<div className="card7">
							<p className="acronym-bio">
								{userLoginAdminInfo?.name.charAt(0)}
							</p>

							<StyledTitle
								tag="p"
								fontSize="heading-6-600"
								color="grey-1"
							>
								{userLoginAdminInfo?.name}
							</StyledTitle>

							<StyledTitle
								tag="p"
								fontSize="body-1-400"
								color="grey-2"
								className="text-bio"
							>
								{userLoginAdminInfo?.description}
							</StyledTitle>

							<StyledButton
								width="four"
								height="one"
								buttonStyled="black"
								font="two"
							>
								Ver todos anuncios
							</StyledButton>
						</div>
					</section>
				</div>
			</StyledAdvertDetailing>

			<Footer />
		</>
	);
};

export default Adverts;
