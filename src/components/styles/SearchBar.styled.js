import styled from "styled-components";

export const StyledSearchBar = styled.form`
    margin: 3vh 0;
    display: flex;
    justify-content: center;

    input {
        text-align: center;
        font-size: 3vh;
        padding: 1vh 2vw;
        border: 3px solid ${props => props.theme.colors.font};
        border-radius: 2vw;
        background-color: rgba(255, 255, 255, 0.2);
        color: ${props => props.theme.colors.font};
    }
`;