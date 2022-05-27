import styled from "styled-components";

export const StyledResults = styled.div`
    padding: 2vh 2vw;
`;

export const Message = styled.p`
    margin: 3vh 0;
    font-size: 2.5vh;
    text-align: center;
`;

export const StyledResultsList = styled.div`
    flex: 1;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(100px, 6vw));
    grid-row-gap: 1.5vh;
    grid-auto-rows: 1fr;
`;

export const StyledResultItem = styled.div`
    border-radius: 0.8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.1s ease-in;
    padding: 1vh;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.15);
    }

    img {
        height: 6.5vh;
    }

    p {
        margin-top: 0.5vh;
        font-size: 1.6vh;
        flex: 1;
        display: flex;
        align-items: center;
        text-align: center;
    }
`;
