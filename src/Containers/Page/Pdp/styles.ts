import styled from "styled-components";

export const Container = styled.div`
    max-width: 1252px;
    width: 100%;

    margin: auto;

    display: flex;
    flex-wrap: wrap;

    @media(min-width: 1053px){
        padding: 0 20px;
    }

    @media(min-width: 1278px){
        padding: 0;
    }
`