import styled from "styled-components";

export const ContainerInstitucional = styled.div`
    max-width: 78.25rem;
    margin: 20px auto;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h3 {
        text-transform: uppercase;
    }

    img {
        margin-top: 10px;
    }

    padding-bottom: 2rem;
`

export const ListLinks = styled.ul`

    list-style: none;

    li a {
        text-decoration: none;
        
        letter-spacing: .7px;
        color: #525a6a;
        font-weight: 500;
        font-size: 12px;

        margin-top: 10px;
        
    }

`