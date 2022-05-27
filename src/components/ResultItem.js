import PropTypes from "prop-types";

import { copyToClipboard } from "../helpers/copyToClipboard";

import { StyledResultItem } from "./styles/Results.styled";

const ResultItem = ({ title, symbol }) => {
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    const handleCopyToClipboard = () => copyToClipboard(symbol);

    return (
        <StyledResultItem onClick={handleCopyToClipboard}>
            <img src={src} alt={title} />
            <p>{title}</p>
        </StyledResultItem>
    );
};

ResultItem.propTypes = {
    emoji: PropTypes.object,
};

export default ResultItem;
