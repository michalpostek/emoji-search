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

    p {
        font-size: 2.4vh;
        margin: 0.5vh 0;
        color: ${props => props.theme.colors.secondary};
    }

    button {
        background: none;
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        border-radius: 50%;
        padding: 0.5vh;
        transition: 0.1s;

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.hoverEffect};
        }

        svg {
            color: ${props => props.theme.colors.font}
        }
    }
`;