import styled from "styled-components";
import * as collor from "../../theme.js";



export const Alert = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position:fixed;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    & div {
        width: 100%;
        background-color: ${collor.base};
        border-radius: 10px;
        text-align:center;
        max-width:750px;
        font-size: 18px;
        padding: 2em;
        line-height:1.5em;
        box-shadow: 0px 12px 17px 6px rgba(0, 0, 0, 0.25);
        pointer-events:none;
    }
    & strike {
        text-decoration: line-through;
    }
    & .icon__alert{
        color: ${collor.primary};
        font-size: 4em;
        margin-bottom:30px;
    }

`

