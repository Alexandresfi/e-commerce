import styled from "styled-components";

import { DrawerFooter, DrawerHeader } from "@chakra-ui/react"

export const HeaderMinicart = styled(DrawerHeader)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;

    p {
        font-weight: 600;
        font-size: 1.125rem;
    }

    button {
        font-weight: 600;
        text-align: center;
    }

`

export const ButtonMinicart = styled.button`
    position: relative;
    
    .counter {
        position: absolute;
        top: -23px;
        left: 6px;
        width: 28px;
        background: #00BFFF;
        height: 28px;
        border-radius: 50%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-weight: 600;
        line-height: 1;
    }
`

export const FooterMinicart = styled(DrawerFooter)`
    flex-direction: column;
    align-items: center;
    gap: 20px;

    button {
        width: 100%;
    }
`

export const Container = styled.div`
    gap: 26px;
    display: flex;
    flex-direction: column;
`

export const ContainerProduct = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    
    width: 99%;

    .closed {
        cursor: pointer;
        margin: -4px 0;
        position: absolute;
        right: 0;
    }
`

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6rem;
`

export const ContainerImage = styled.div`
    max-width: 5rem;
    height: 6rem;
    width: 100%;
    
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }

`

export const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;    
    max-height: 33px;     
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: bold;
    cursor: pointer;
  
`

export const ContainerPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Discount = styled.span`
    font-size: 0.9rem;
    color: red;
    text-align: center;
    text-decoration: line-through;
    letter-spacing: -0.05em;
    font-weight: 400;
`

export const Price = styled.span`
    font-size: 1rem;
    color: black;
    text-align: center;
    font-weight: 500;
`

export const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5px;

    p {
        font-size: 1.2rem;
        font-weight: 500;

    }
`