import styled from "styled-components";

export const TopBar = styled.div`
    background-color: #00BFFF;
`

export const ContentTopBar = styled.div`

    max-width: 78.25rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-weight: 300;
        padding: 0.3rem;
        font-size: 0.875rem;
        border-radius: 5px;

        span {
            font-weight: 500;
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 0 1rem;    
        a {
            display: flex;
            align-items: center;
            img {
                width: 1.5rem;
            }
        }
    }   
`

export const ContainerHeader = styled.div`
    background-color: white;
`

export const ContentHeadert = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 78.25rem;
    margin: auto;
    padding-top: 0.5rem;

    img {
        cursor: pointer;
    }

    .container {
        max-width: 7rem;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const ContainerSearch = styled.div`

    display: flex;
    align-items: center;
    max-width: 37.5rem;
    width: 100%;

    border-radius: 5px;
    border: 1px solid #000;

    input {
        width: 100%;
        height: 2.5rem;
        padding: 0 1rem;
        color: #000;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
    }

    button {
        height: 2.5rem;

        background-color: #00BFFF;

        color: #000;
        font-weight: bold;
        text-align: center;
        padding: 1rem;

        border: none;
        border-radius: 0 5px 5px 0;
        transition: all 0.5s;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 1.375rem;
        }
        
        &:hover {
            background-color: #07a4d9;
            color: white;
        }
    }
`