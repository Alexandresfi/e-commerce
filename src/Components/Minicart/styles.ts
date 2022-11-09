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
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    
    width: 99%;

    .closed {
        cursor: pointer;
        margin: -4px 0;
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
    }

`

export const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;    
    max-height: 41px;     
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  
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

export const Quantity = styled.div`
    max-width: 6rem;
    width: 100%;
    height: 2rem;
    

    border: 1px solid black;
    border-radius: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;


    input {
        border: 1px solid black;
        border-bottom: none;
        border-top: none;


        max-width: 2rem;
        width: 100%;
        height: 100%;
        padding-bottom: 5px;
        

        text-align: center;
        
    }

    button {
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;  

        height: 100%;
        
        display: flex;
        align-items: flex-end;

        cursor: pointer;
    }
`