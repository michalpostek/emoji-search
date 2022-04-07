import PropTypes from "prop-types";

import { StyledResults } from "./styles/Results.styled";

import ResultsList from "./ResultsList";
import { filterEmojis } from "../helpers/filterEmojis";

const Results = ({ keyword }) => {
    const filteredEmojis = filterEmojis(keyword.toLowerCase());

    return (
        <StyledResults>
            {filteredEmojis.length 
                && <ResultsList emojis={filteredEmojis} />
                || <p>No matching results.</p>
            }
        </StyledResults>
    );
};

Results.propTypes = {
    keyword: PropTypes.string
}

export default Results;