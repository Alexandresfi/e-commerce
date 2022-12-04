import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
`

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
`
export const OldPrice = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: line-through;
    color: red;
`

export const Price = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1rem;
    margin: 1.5rem 0;
`

export const ContainerBuyQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`