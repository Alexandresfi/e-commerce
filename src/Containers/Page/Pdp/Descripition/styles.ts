import styled from "styled-components";

export const ContainerDescription = styled.section`
    max-width: 1252px;
    width: 100%;
    margin: 2rem auto;

     @media (max-width: 1024px) {
        padding: 0 20px;
    }

    h1{
        font-weight: bold;
        font-size: 2rem;
        
        @media (max-width: 1024px) {
            text-align: center;
        }
    }
    
     @media(min-width: 1053px){
        padding: 0 20px;
    }

    @media(min-width: 1278px){
        padding: 0;
    }
`

export const DescriptionText = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    `

export const ContainerSpecifications = styled.section`
    max-width: 1252px;
    width: 100%;
    margin: 0 auto 2rem;

    @media (max-width: 1272px) {
        padding: 0 20px;
    }

    h2 {
        font-weight: bold;
        font-size: 1.5rem;
        @media (max-width: 1024px) {
            text-align: center;
        }
    }


`

export const SpecificationsText = styled.ul`
    list-style: none;

    li{
        &:nth-child(2n){
            background-color: #dcdcdc3b;
            border-radius: 0.5rem;
        }

        div {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 1px 5px;

            @media (max-width: 1024px) {
                padding: 1px 10px;
                gap: 5px;
            }
    

            span {
                font-weight: 500;
            }

            p {
                width: 90%;
            }
        }

        margin-bottom: 0.5rem;
    }
`
