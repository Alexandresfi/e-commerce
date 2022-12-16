import styled from "styled-components";

interface SearchProps {
    search:boolean
}

export const ContentProducts = styled.div<SearchProps>`
    max-width: 18.75rem;
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
        text-transform: uppercase;
    }

    &:hover {
        border-color: black;
    }

    @media (max-width: 913px) {
        max-width: ${(props)=> props.search ? '11.75rem': '11.9rem'};
    }
`

export const Img = styled.img`
    width: 18rem;
    height: 21.5rem;

    margin: 5px auto 0;
    border-radius: 8px;
    
    object-fit: cover;

    cursor: pointer;
`

export const Title = styled.p`
    font-weight: bold;
    text-align: left;
    line-height: 16px;    

    font-size: 1.2rem;
    letter-spacing: 0.05em;
    margin: 10px 0;

    min-height: 33px;
    max-height: 33px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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