import styled from 'styled-components';

const StyledCardContainer = styled.div`
	background-color: white;
	width: 100%;
	height: 100vh;
	margin: auto;
	position: relative;

	@media screen and (min-width: 1024px) {
		background-color: white;
		border-radius: 32px;
		box-shadow: 0px 30px 60px rgba(61, 108, 236, 0.15);
		width: 736px;
		height: 512px;
		position: relative;
	}
`;

const StyledTitle = styled.h2`
	font-family: 'Hanken Grotesk';
	font-weight: 700;
	font-size: 24px;
	margin: 0;
	margin-bottom: 1rem;
`;

const StyledCard = styled.div`
	padding: 2.5rem;
	padding-top: calc(356px + 38px);
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (min-width: 1024px) {
		padding: 38px;
		padding-left: calc(50% + 38px);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

const StyledButton = styled.div`
	background-color: #303b59;
	border-radius: 128px;
	font-size: 18px;
	font-weight: 700;
	text-align: center;
	font-family: 'Hanken Grotesk';
	color: white;
	padding: 1.0625rem;
	margin-top: 1.5rem;
`;

export { StyledCardContainer, StyledTitle, StyledCard, StyledButton };
