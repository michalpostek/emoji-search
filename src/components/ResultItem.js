import { useState } from "react";
import PropTypes from "prop-types";

import { StyledResultItem } from "./styles/Results.styled";

import { copyToClipboard } from "../helpers/copyToClipboard";
import Alert from "./Alert";

const ResultItem = ({ title, symbol }) => {
    const [copied, setCopied] = useState(false);

    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    const handleCopyToClipboard = () => {
        copyToClipboard(symbol);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <StyledResultItem onClick={handleCopyToClipboard}>
            <img src={src} alt={title} />
            <p>{title}</p>
            {copied && <Alert message="Emoji has beed copied succesfully!" />}
        </StyledResultItem>
    );
};

ResultItem.propTypes = {
    emoji: PropTypes.object,
};

export default ResultItem;
