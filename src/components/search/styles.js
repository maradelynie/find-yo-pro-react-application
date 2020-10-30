import styled from "styled-components";
import * as collor from "../../theme.js";

export const SearchCard = styled.div`
    width: 100%;
    background-color: ${collor.base};
    margin:auto;
    border-radius: 10px;
    max-width:750px;
    font-size: 18px;
    padding: 2em;
    line-height:1.5em;
    margin-bottom: 2em;
    box-shadow: 0px 12px 17px 6px rgba(0, 0, 0, 0.25);
    & form{
        margin-top: 3em;
        display:flex;
        gap: 20px;

    }
    @media only screen and (max-width: 500px) {
        form{
        flex-direction:column;
        }
    }

`
export const SearchInput = styled.input`
    width: 100%;
    line-height:1.5em;
    padding: 10px;
    border-radius:5px;
    outline:none;
    border: 5px solid ${collor.baseSecundary};
    font-size:18px;
    &::placeholder{
        color:${collor.baseSecundary};
    }
`
export const SearchBtn = styled.button `
    line-height:1.5em;
    padding: 10px;
    border: none;
    background-color: ${collor.primary};
    color: ${collor.primaryText};
    min-width: 150px;
    box-shadow: 0px 26px 22px -12px ${collor.primary+"80"};
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
    outline: none;
    transition:.2s;
    &:hover{
        background-color: ${collor.secundary};
        box-shadow: 0px 26px 22px -12px ${collor.secundary+"80"};
        color: ${collor.text};
    }
    &:active {
        opacity: .5;
    }
`