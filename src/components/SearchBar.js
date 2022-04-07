import { StyledSearchBar } from "./styles/SearchBar.styled";

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <input 
                type="text" 
                placeholder="Search for a keyword..."
            />
        </StyledSearchBar>
    );
};

export default SearchBar;