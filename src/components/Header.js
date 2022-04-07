import PropTypes from "prop-types";

import { CgDarkMode } from "react-icons/cg";
import { GrGithub } from "react-icons/gr";

import { StyledHeader } from "./styles/Header.styled";

const Header = ({ toggleTheme }) => {
    return (
        <StyledHeader>
            <h1>Emoji Search</h1>
            <p>A simple Emoji-Search App built with ReactJS</p>
            <div>
                <button onClick={toggleTheme}>
                    <CgDarkMode size={42} />
                </button>
                <a href="https://github.com/michalpostek/emoji-search" target="_blank">
                    <button>
                        <GrGithub size={42} />
                    </button>
                </a>
            </div>
        </StyledHeader>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func,
};

export default Header;