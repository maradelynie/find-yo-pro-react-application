import styled from "styled-components";
import * as collor from "../../theme.js";


export const Item = styled.div`
    max-width: 750px;
    margin: 1em auto;
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
    & h4{
        font-size: 24px;
        line-height:3em;
    }
    .resultItem_userDetail{
        display:flex;
        gap:20px;
        margin: 1em 0;
        align-items:flex-start;

        & img{
            width: 7em;
            border-radius:10px;
        }
        .resultItem_text{
            display:flex;
            flex-direction:column;
        }
        @media only screen and (max-width: 400px) {
            flex-direction:column;
            & img{
            width: 100%;
            height: 9em;
            object-fit:cover;
        }
        }
    }
`

