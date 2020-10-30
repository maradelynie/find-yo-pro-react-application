import styled from "styled-components";
import * as collor from "../../theme.js";

import { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`
export const Spinner = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position:fixed;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    .icon__loading {
       
        font-size: 20vw;
        color: ${collor.base};
        animation: ${spin} 1s ease infinite;
    }

`

