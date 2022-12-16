import styled from "styled-components";

export const ContainerSearchResult = styled.main`
    max-width: 1252px;
    margin: 20px auto;
    
`

export const TitleResult = styled.h1`
    font-size: 1.9rem;
    font-weight: bold;
    text-align: center;
    margin: 2rem auto;
`

export const Text = styled.h1`
    font-size: 1.5rem;
    padding: 0.5rem 0;
    font-weight: bold;

    span {
        color: #00BFFF;
    }

    @media (max-width: 913px) {
        margin-left: 5%;
    }
`

export const ContentProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 33px 17px;
    
    @media (max-width: 913px){
        
        gap: 33px 0;
        justify-content: space-between;
        padding: 0 5%;
    }
`