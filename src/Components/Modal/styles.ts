import styled from "styled-components";

interface Loged {
    loged: boolean
}

export const ContainerWarning = styled.div`
    margin-top: 10px;

    font-weight: bold;

    span {
        font-weight: bolder;
        color: green;
    }
`

export const Avatar = styled.img<Loged>`

    
    height: ${(props)=> props.loged ? '3rem': 'auto'};
    width: ${(props)=> props.loged ? '3rem': 'auto'};
    border-radius: ${(props)=> props.loged ? '50%': 'none'};
    background: ${(props)=> props.loged ? '#000': 'none'};
`