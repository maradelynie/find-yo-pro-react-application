import styled from "styled-components";
import * as collor from "../../theme.js";


export const Repo = styled.div`
    border-left: 5px solid ${collor.secundary};
    padding: 0 10px ;
    & .repository_languaes{
        width:100%;
        margin-bottom: 20px;
       
    }
    & span {
        font-size:.8em;
        line-height:1em;
    }
    
`
export const Lang = styled.div`
    width: ${props => props.size};
    & .languages_Item{
        background-color:${collor.secundary};
        min-width:100%;
        height: 1em;
    }
    & p{
        color:${collor.baseSecundary};
        font-size:16px;
    }
    
`

