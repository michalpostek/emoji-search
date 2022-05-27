import styled from "styled-components";

export const StyledSearchBar = styled.form`
    padding: 1.5vh 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        font-size: 2vh;
    }

    input {
        text-align: center;
        font-size: 2.5vh;
        border: 2px solid ${props => props.theme.colors.font};
        border-radius: 2vw;
        background-color: transparent;
        color: ${props => props.theme.colors.font};
        padding: 0.6vh 2vw;
    }
`;
