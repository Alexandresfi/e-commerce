import styled from "styled-components";

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

    @media (max-width: 913px) {
        max-width: 90vw;
        width: 100%;
        margin: 0 auto 20px auto;
    }
`