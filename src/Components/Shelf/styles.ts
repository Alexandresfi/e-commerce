import styled from "styled-components";

export const Container = styled.div`
    max-width: 78.25rem;
    width: 100%;
    margin: auto;

    position: relative;

`

export const ContainerCarrousel = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1.1rem;

    z-index: 3;

    overflow-x: hidden;
    scroll-behavior: smooth;
`

export const ContainerButtons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 32px;
    bottom: 0;
    
`

export const Button = styled.button`

    border-radius: 8px;
    border: none;

    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0) 98%, rgba(0,212,255,1) 100%);

    z-index: 2;

    transition: all 1s;

    .left {
        transform: rotate(180deg);
    }

    &:hover {
       background: rgb(0,0,0);
       background: linear-gradient(90deg, rgba(0,0,0,0.3925945378151261) 95%, rgba(0,212,255,1) 100%);
    }
`