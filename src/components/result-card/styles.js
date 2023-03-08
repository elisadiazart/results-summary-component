import styled from 'styled-components';

const StyledResultCard = styled.div`
	background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
	border-radius: 0 0 32px 32px;
	position: absolute;
	width: 100%;
	height: 370px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 1024px) {
		background: linear-gradient(
			180deg,
			#7755ff 0%,
			#6943ff 0.01%,
			#2f2ce9 100%
		);
		border-radius: 32px;
		position: absolute;
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const StyledTitle = styled.div`
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 700;
	font-size: 1.125rem;
	color: #cac9ff;
	text-align: center;
	padding-top: 2rem;
	@media screen and (min-width: 1024px) {
		font-size: 1.5rem;
		padding-top: 2.375rem;
	}
`;

const StyledCircle = styled.div`
	border-radius: 50%;
	width: 140px;
	height: 140px;
	background: linear-gradient(
		180deg,
		#4d21c9 0%,
		rgba(37, 33, 201, 0) 100%,
		rgba(37, 33, 201, 0) 100%
	);
	margin-top: 20px;
	@media screen and (min-width: 1024px) {
		width: 200px;
		height: 200px;
		margin-top: 35px;
	}
`;

const StyledResult = styled.h2`
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 800;
	font-size: 56px;
	color: white;
	text-align: center;
	margin: 0;
	margin-top: 25px;

	@media screen and (min-width: 1024px) {
		font-size: 72px;
		margin-top: 45px;
	}
`;

const StyledTotalSum = styled.p`
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 700;
	font-size: 16px;
	color: #cac9ff;
	text-align: center;
	margin: 0;
	margin-top: -10px;
	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;

const StyledSecondTitle = styled.h2`
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 700;
	font-size: 24px;
	color: white;
	@media screen and (min-width: 1024px) {
		font-size: 32px;
	}
`;

const StyledText = styled.p`
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 23px;
	color: #cac9ff;
	font-weight: 500;
	margin: 0 52px 0 52px;
	text-align: center;
	@media screen and (min-width: 1024px) {
		font-size: 18px;
	}
`;

export {
	StyledResultCard,
	StyledTitle,
	StyledCircle,
	StyledResult,
	StyledTotalSum,
	StyledSecondTitle,
	StyledText
};
