import styled from "styled-components";

export const StyledResults = styled.div`
    margin: 5vh 7vw;
    display: flex;
    justify-content: center;
`;

export const StyledResultsList = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1vh;
    grid-auto-rows: 1fr;
`;

export const StyledResultItem = styled.div`
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5vh;
    transition: 0.1s ease-in;

    &:hover {
        cursor: pointer;
        background-color: rgb(220, 220, 220);
    }

    img {
        height: 7vh;
        margin-bottom: 1vh;
    }

    p {
        text-align: center;
    }
`;