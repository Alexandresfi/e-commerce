import styled from "styled-components";

export const ContainerFooter = styled.footer`
    text-align: center;
`

export const ContainerForm = styled.div`
    width: 100%;
    min-height: 7.625rem;
    height: 100%;
    margin: auto;

    background-color: #00BFFF;

`

export const Content = styled.form`
    max-width: 78.25rem;
    margin:auto;
    padding: 2rem 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    @media(max-width: 913px) {
        padding: 2rem 20px;
    }
`

export const Texts = styled.div`
    text-align: left;
    color: white;
`

export const ContentForm = styled.form`

    display: flex;
    gap: 10px;

    button {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 10px;
        width: 100%;
        height: 47px;

        letter-spacing: 3.6px;
        padding: 0 20px;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;

        &:hover {
            background-color: #fff;
            color: #000;
        }

        @media(max-width: 660px) {
            padding: 0 5px;
        }
    }

    input {
        outline: none;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #1E90FF;
        
        max-width: 12.4375rem;
        width: 100%;
        
        &::placeholder {
            color: #fff;
        }
    }
`