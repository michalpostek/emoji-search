import PropTypes from "prop-types";

export const copyToClipboard = text => navigator.clipboard.writeText(text);

copyToClipboard.propTypes = {
    text: PropTypes.string,
};
