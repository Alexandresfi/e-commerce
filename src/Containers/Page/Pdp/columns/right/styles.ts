import styled from "styled-components";

interface ColorProps {
    color: string
}

export const Container = styled.div`
    width: 40%;
    @media (max-width: 1024px) {
        width: 100%;
    }

    padding: 0 20px;
`

export const Title = styled.h3`
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    @media (max-width: 1024px) {
        margin-top: 2rem;
    }
    
`
export const OldPrice = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-decoration: line-through;
    color: red;
    margin-top: 0.3rem;
`

export const Price = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1rem;
`

export const ContainerBuyQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const TitleSimilar = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
`

export const ProductSimilar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

`

export const ContainerColorSimilar = styled.button`
    width: 38px;
    height: 38px;

    border: 0.5px solid black;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    &:hover {
        border-color: #218e16;
    }
`

export const ColorSimilar = styled.span<ColorProps>`
    width: 30px;
    height: 30px;

    border-radius: 50%;
    background-color: ${(props)=> props.color};
    transition: all 0.5s;
`

export const SKUVariation = styled.button`
    max-width: 7rem;
    width: 100%;
    
    padding: 5px;

    border: 1.2px solid black;
    border-radius: 0.5rem;

    text-transform: capitalize;
    font-weight: 500;
    transition: all 0.5s;

    &:hover {
        border-color: #218e16;
    }
`