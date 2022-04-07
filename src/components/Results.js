import PropTypes from "prop-types";

import { StyledResults } from "./styles/Results.styled";

const Results = ({ keyword }) => {
    return (
        <StyledResults>
            {keyword}
        </StyledResults>
    );
};

Results.propTypes = {
    keyword: PropTypes.string
}

export default Results;