import styled from "styled-components";

export const StyledHeader = styled.header`
    text-align: center;
    padding: 3vh 0 2vh;

    h1 {
        font-size: 6vh;
        font-weight: 400;
        color: ${props => props.theme.colors.secondary};
    }
`;
