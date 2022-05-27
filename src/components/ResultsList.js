import PropTypes from "prop-types";

import ResultItem from "./ResultItem";

import { StyledResultsList } from "./styles/Results.styled";

const ResultsList = ({ emojis }) => {
    return (
        <StyledResultsList>
            {emojis.map(({ title, symbol }) => {
                return (
                    <ResultItem 
                        key={title}
                        title={title}
                        symbol={symbol}
                    />
                );
            })}
        </StyledResultsList>
    );
};

ResultsList.propTypes = {
    emojis: PropTypes.array,
};

export default ResultsList;
