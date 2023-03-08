import { StyledCircle, StyledResult, StyledResultCard, StyledSecondTitle, StyledText, StyledTitle, StyledTotalSum } from "./styles"


const ResultCard = () => {
    return <StyledResultCard>
        <StyledTitle>Your Result</StyledTitle>
        <StyledCircle>
            <StyledResult>76</StyledResult>
            <StyledTotalSum>of 100</StyledTotalSum>
        </StyledCircle>
        <StyledSecondTitle>Great</StyledSecondTitle>
        <StyledText>Your performance exceed 65% of the people conducting the test here!</StyledText>
    </StyledResultCard>
}

export default ResultCard