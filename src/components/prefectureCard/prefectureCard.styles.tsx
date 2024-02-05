import styled from 'styled-components'

export const CardContainer = styled.div`
    margin: auto;
    margin-top: 10px;
    width: 80%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
    padding: 5px;
    justify-content: space-evenly;
    justify-self: auto;

    @media (max-width: 1500px) {
        grid-template-columns: auto auto auto auto auto auto auto;
    }

    @media (max-width: 1200px) {
        grid-template-columns: auto auto auto auto auto auto;
    }

    @media (max-width: 1000px) {
        grid-template-columns: auto auto auto auto;
    }

    @media (max-width: 700px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 500px) {
        grid-template-columns: auto auto;
    }
`
