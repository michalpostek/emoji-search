import styled from "styled-components";

export const StyledHeader = styled.header`
    text-align: center;
    margin: 4vh 10vw;
    position: relative;

    h1 {
        font-size: 6vh;
        margin: 0.5vh 0;
        color: ${props => props.theme.colors.font};
    }
`;
