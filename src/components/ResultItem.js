import PropTypes from "prop-types";

import { StyledResultItem } from "./styles/Results.styled";

const ResultItem = ({ emoji: { title, symbol } }) => {
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
        <StyledResultItem>
            <img src={src} alt={title} />
            <p>{title}</p>
        </StyledResultItem>
    );
};

ResultItem.propTypes = {
    emoji: PropTypes.object,
};

export default ResultItem;