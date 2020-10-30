import styled from "styled-components";
import * as collor from "../../theme.js";


export const MainHeader = styled.header`
    width: 100%;
    font-size: 60px;
    background-color: ${collor.primary};
    color: ${collor.primaryText};
    height: 5em;
    padding: 1em;
    margin-bottom: -2em;

    & .header_container{
        max-width:750px;
        display:flex;
        align-items:baseline;
        margin:auto;
        gap:20px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 40px;
        
        padding: .5em;
        height: 4.5em;
        & .header_container{
            justify-content:center;
        }
    }
`

