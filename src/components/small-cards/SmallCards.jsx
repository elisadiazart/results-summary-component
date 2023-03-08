import {StyledCategory, StyledIcon, StyledResult, StyledResultContainer, StyledSmallCard, StyledSmallCardTitle} from "./styles"


const SmallCard  = ({color, backgroundColor,icon, cardTitle, result, colorResult}) => {
    return <StyledSmallCard backgroundColor={backgroundColor}>
                <StyledCategory>
                    <StyledIcon src={icon} ></StyledIcon>
                    <StyledSmallCardTitle color={color}>{cardTitle}</StyledSmallCardTitle>
                </StyledCategory>
                <StyledResultContainer>
                    <StyledResult colorResult={colorResult}>{result}</StyledResult>
                    <StyledResult colorResult='#9799A8'>/</StyledResult>
                    <StyledResult colorResult='#9799A8'>100</StyledResult>
                </StyledResultContainer>
            </StyledSmallCard>
}

export default SmallCard