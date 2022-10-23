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