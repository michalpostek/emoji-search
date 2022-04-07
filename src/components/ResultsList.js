import PropTypes from "prop-types";

import ResultItem from "./ResultItem";

import { StyledResultsList } from "./styles/Results.styled";

const ResultsList = ({ emojis }) => {
    return (
        <StyledResultsList>
            {emojis.map((emoji, index) => {
                return (
                    <ResultItem 
                        key={index}
                        emoji={emoji}
                    />
                )
            })}
        </StyledResultsList>
    );
};

ResultsList.propTypes = {
    emojis: PropTypes.array,
};

export default ResultsList;