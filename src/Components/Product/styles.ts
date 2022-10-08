import styled from "styled-components";


export const ContentProducts = styled.div`
    max-width: 25rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex: none;

    z-index: 2;

    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.5s;

    p {
        max-width: 23rem;
        width: 100%;
        padding: 0 10px;
    }

    &:hover {
        border-color: black;
    }
`

export const Img = styled.img`
    width: 24.8rem;
    height: 21.5rem;
    margin: auto;
    border-radius: 8px;
    
    object-fit: cover;
`

export const Title = styled.p`
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;

    font-size: 1.2rem;
    letter-spacing: 0.05em;
    line-height: 20px;
    margin: 10px 0;
`

export const ValueFrist = styled.p`
    color: red;
    text-align: left;
    
    letter-spacing: 0.05em;
    line-height: 20px;
    
    span {
        text-decoration: line-through;
    }

`

export const Price = styled.p`
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;

    font-size: 1rem;
    letter-spacing: 0.05em;
    line-height: 20px;
    margin: 10px 0 20px;
`

export const BuyButton = styled.button`
    height: 2.5rem;
    width: 97%;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: #00BFFF;
    margin: 0 0 10px 0;

    transition: all 0.5s;

    &:hover {
        background-color:#07a4d9;
    }
`