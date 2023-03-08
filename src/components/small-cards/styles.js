import styled from 'styled-components';

const StyledIcon = styled.img`
	width: 20px;
	height: 20px;
`;

const StyledSmallCardTitle = styled.h3`
	font-family: 'Hanken Grotesk';
	font-weight: 500;
	font-size: 18px;
	color: ${({ color }) => color};
	margin: 0;
`;

const StyledSmallCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ backgroundColor }) => backgroundColor};
	padding: 1rem;
	border-radius: 12px;
`;

const StyledCategory = styled.div`
	display: flex;
	gap: 0.7rem;
	align-items: center;
`;

const StyledResultContainer = styled.div`
	display: flex;
	gap: 0.3rem;
`;

const StyledResult = styled.div`
	font-family: 'Hanken Grotesk';
	font-weight: 700;
	font-size: 18px;
	color: ${({ colorResult }) => colorResult};
`;

export {
	StyledIcon,
	StyledSmallCard,
	StyledSmallCardTitle,
	StyledCategory,
	StyledResultContainer,
	StyledResult
};
