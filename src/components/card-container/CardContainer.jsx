import ResultCard from "../result-card/ResultCard"
import { cardsInfo } from "../../constants/cards-info"
import SmallCard from "../small-cards/SmallCards"
import { StyledButton, StyledCard, StyledCardContainer, StyledTitle } from "./styles"

const CardContainer = () => {
    return <StyledCardContainer>
        <ResultCard/>
        <StyledCard>
            <StyledTitle>Summary</StyledTitle>
            {
			cardsInfo.map(card=>
			<SmallCard key={card.id}{...card}/>
			)
		    }
            <StyledButton>Continue</StyledButton>
        </StyledCard>
    </StyledCardContainer>
}

export default CardContainer