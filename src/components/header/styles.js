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
    @media only screen and (max-width: 400px) {
        font-size: 40px;
        text-align:center;
        padding: .5em;
        height: 4em;
    }
`

