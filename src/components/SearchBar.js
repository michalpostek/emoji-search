import { useRef } from "react";
import PropTypes from "prop-types";

import { StyledSearchBar } from "./styles/SearchBar.styled";

const SearchBar = ({ setKeyword }) => {
    const keywordInputRef = useRef(null);
    const handleSetKeyword = () => setKeyword(keywordInputRef.current.value);

    return (
        <StyledSearchBar>
            <input 
                type="text" 
                placeholder="Search for a keyword..."
                ref={keywordInputRef}
                onChange={handleSetKeyword}
            />
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    setKeyword: PropTypes.func,
};

export default SearchBar;