import PropTypes from "prop-types";

import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <h1>Emoji Search</h1>
        </StyledHeader>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func,
};

export default Header;
