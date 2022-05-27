import styled from "styled-components";

export const StyledResults = styled.div`
    margin: 3vh 6vw;
    display: flex;
    justify-content: center;

    p {
        color: ${props => props.theme.colors.font};
        font-size: 2.8vh;
    }
`;

export const StyledResultsList = styled.div`
    flex: 1;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(100px, 6vw));
    grid-gap: 0.5vh;
    grid-auto-rows: 1fr;
`;

export const StyledResultItem = styled.div`
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vh 0.5vw 0.5vh;
    transition: 0.1s ease-in;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.hoverEffect};
    }

    img {
        height: 7vh;
        margin-bottom: 1vh;
    }

    p {
        text-align: center;
        font-size: 1.5vh;
        color: ${props => props.theme.colors.font};
    }
`;
