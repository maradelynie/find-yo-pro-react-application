import styled from "styled-components";
import * as collor from "../../theme.js";


export const Item = styled.div`
    max-width: 750px;
    margin:auto;
    margin-top: 1em;
    line-height: 2em;
    width: 100%;

    border-left: solid 7px ${collor.primary};
    padding: 10px;
    & section{
        cursor: pointer;
        display:flex;
    justify-content: space-between;
    align-items:center;
    }
    &:hover {
    background-color: ${collor.baseSecundary+"22"};

    }
    & a{
        color:${collor.primary};

    }
    & h3 {
        font-size: 24px;
        color:${collor.primary};
    }
    & .detailsIcon{
        color:${collor.primary};
        font-size: 30px;

    }
`

