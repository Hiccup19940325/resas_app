import styled from "styled-components"

export const CheckBoxContainer = styled.div`
    width:110px;
    border-radius: 10px;
    border: 2px;
    text-align: center;
    padding: 4px;
    margin: 0.5rem;
    background-color: white;

    input {
        width:15px;
        height:15px;
    }

    label {
        display: contents;
        marginLeft: 1em;
        cursor: pointer;
        font-size: 18px;
    }
`