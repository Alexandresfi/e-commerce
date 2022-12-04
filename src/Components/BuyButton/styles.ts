import styled from "styled-components";

export const Button = styled.button`
    height: 2.5rem;
    width: 97%;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: #00BFFF;
    margin: 0 0 10px 0;

    transition: all 0.5s;

    z-index: 10;

    &:hover {
        background-color:#07a4d9;
    }
`