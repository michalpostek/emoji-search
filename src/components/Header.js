import PropTypes from "prop-types";
import { CgDarkMode } from "react-icons/cg";

import { StyledHeader } from "./styles/Header.styled";

const Header = ({ toggleTheme }) => {
    return (
        <StyledHeader>
            <h1>Emoji Search</h1>
            <p>A simple Emoji-Search App built with ReactJS</p>
            <button onClick={toggleTheme}>
                <CgDarkMode size={42} />
            </button>
        </StyledHeader>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func,
};

export default Header;