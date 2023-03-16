import styled from 'styled-components';

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin-top: 0px auto;
    margin-bottom: 5rem auto;
    margin-left: auto;
    margin-right: auto
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input {
        flex: 1;
        padding: 1rem;
    }
`;

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hoverm{
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    color: var(--naranja);
    font-family: 'PT Sans', sans-serif;
    text-align: center;
`;

export const Error = styled.p`
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 1rem 0;
`;