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

    @media (max-width: 1536px) {
        grid-template-columns: auto auto auto auto auto auto auto;
    }

    @media (max-width: 1280px) {
        grid-template-columns: auto auto auto auto auto auto;
    }

    @media (max-width: 1024px) {
        grid-template-columns: auto auto auto auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 640px) {
        grid-template-columns: auto auto;
    }
`
