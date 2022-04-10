import styled from 'styled-components';

const Input = styled.input`
    background-color: transparent;
    margin-bottom: 1rem;
    border: 0.12rem solid #C2C2C2;
    box-sizing: border-box;
    display: block;
    outline: none;
    padding: 0.5rem;
    width: 100%;

    &::focus{
        outline: none;
    }
`

export {
    Input
}