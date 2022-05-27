import PropTypes from "prop-types";

import { StyledSearchBar } from "./styles/SearchBar.styled";

const SearchBar = ({ setKeyword }) => {
    return (
        <StyledSearchBar>
            <input 
                type="text" 
                placeholder="Search for a keyword..."
                onChange={event => setKeyword(event.target.value)}
            />
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    setKeyword: PropTypes.func,
};

export default SearchBar;
