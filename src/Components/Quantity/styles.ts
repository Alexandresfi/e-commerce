import styled from "styled-components";

export const Container = styled.div`
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