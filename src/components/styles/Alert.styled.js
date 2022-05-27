import styled, { keyframes } from "styled-components";

const disappearing = keyframes`
    from { opacity: 1 }
    to { opacity: 0 }
`;

export const StyledAlert = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 2.2vh;
    padding: 2vh 1vw;
    border-radius: 2vw;
    color: ${props => props.theme.colors.secondary};
    animation: 1s linear ${disappearing};
    opacity: 0;
`;
