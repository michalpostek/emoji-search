import PropTypes from "prop-types";

import { StyledSearchBar } from "./styles/SearchBar.styled";

const SearchBar = ({ setKeyword }) => {
    return (
        <StyledSearchBar>
            <label htmlFor="keyword">Search for keywords</label>
            <input 
                id="keywords"
                type="text" 
                onChange={event => setKeyword(event.target.value)}
            />
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    setKeyword: PropTypes.func,
};

export default SearchBar;
