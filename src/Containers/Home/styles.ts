import styled from "styled-components";

export const Banner = styled.img`
    width: 100%;
    max-height: 27rem;
    height: 100%;

    margin: 1.5rem auto;
`

export const ContainerBanner = styled.div`
    justify-content: center;
    align-items: center;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    max-width: 78.25rem;
    height: 31.31rem;
    width: 100%;

    margin: auto;

    .img1 {
        display: flex;
        justify-content: center;
        align-items: center;
        
        grid-row: 1 / -1;
        grid-column-start: 1;
        
        background: linear-gradient(90deg, rgba(0,0,0,0.1741071428571429) 16%, rgba(0,172,255,0.6951155462184874) 100%);

        height: 31.31rem;
    }
    .img2 {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;

        text-align: center;
        background: linear-gradient(90deg, rgba(0,0,0,0.1741071428571429) 16%, rgba(0,255,231,0.8463760504201681) 100%);
    }
    .img3 {
        display: flex;
        justify-content: center;
        align-items: center;

        height:100%;

        background: linear-gradient(90deg, rgba(0,0,0,0.1741071428571429) 16%, rgba(0,206,255,1) 100%);

    }

    @media (max-width: 912px) {
        padding: 0 20px;
    }
`