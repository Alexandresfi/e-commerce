import styled from "styled-components";

interface Down {
    down: boolean
}

export const ContainerImagesPDP = styled.div`

    display: flex;
    gap: 10px;
    height: 28.5rem;
    max-width: 40rem;
    width: 100%;

    position: relative;

    @media (max-width: 1024px) {
        padding: 0 20px;
    }
    
`

export const SilderLeft = styled.ul`
    list-style: none;
    overflow: hidden;
    scroll-behavior: smooth;

    li {
        height: 12.5rem;
        width: 12.5rem;
        margin: 3px 0;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`

export const ContainerMainImg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    img {
        max-width: 75%;
        height: 75%;
        margin: auto;
        
        @media (max-width: 1024px) {
            max-width: 100%;
            height: 100%;
        }
        
    }
    
    @media (min-width: 1024px) {
                background-color: #f1f0f040;
    }
`

export const ButtonSlider = styled.button<Down>`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    background-color: #ffffff80;

    width: 9.5rem;
    height: 2rem;
    
    position: absolute;
    top: ${(props)=> !props.down && '0'};
    bottom: ${(props)=> props.down && '0'};

    transform:  rotate(${(props)=> props.down ? '180deg' : '0'});


`