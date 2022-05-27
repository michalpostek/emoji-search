import PropTypes from "prop-types";

import { StyledResults, Message } from "./styles/Results.styled";

import ResultsList from "./ResultsList";
import { filterEmojis } from "../helpers/filterEmojis";

const Results = ({ keyword }) => {
    const filteredEmojis = filterEmojis(keyword.toLowerCase());

    return (
        <StyledResults>
            {filteredEmojis.length 
                ? <ResultsList emojis={filteredEmojis} />
                : <Message>No matching results.</Message>
            }
        </StyledResults>
    );
};

Results.propTypes = {
    keyword: PropTypes.string
}

export default Results;
