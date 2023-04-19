import styled from "styled-components";

export const StyledSectionModal = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: var(--grey-8);
	display: flex;
	align-items: center;
	justify-content: center;

	.div-modal {
		width: 40%;
		height: fit-content;
		background-color: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
		border-radius: var(--border-radius-8);
		gap: var(--gap-20);
	}

	.div-modal-header {
		width: 92%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3.5%;
		button {
			color: var(--grey-4);
		}
	}

	.div-modal-form {
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: var(--gap-20);
	}

	.div-modal-button {
		display: flex;
		justify-content: end;
		gap: var(--gap-10);
	}
`;
