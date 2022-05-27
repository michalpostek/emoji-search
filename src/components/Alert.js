import PropTypes from "prop-types";

import { StyledAlert } from "./styles/Alert.styled";

const Alert = ({ message }) => {
    return (
        <StyledAlert>
            {message}
        </StyledAlert>
    );
};

Alert.propTypes = {
    message: PropTypes.string,
}

export default Alert;
