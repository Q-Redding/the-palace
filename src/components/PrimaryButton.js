import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: black;
    color: whitesmoke;
    border-radius: 20px;
    padding: 0.6em 2rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 300ms ease-in-out;
    

    &:hover{
        background-color: #5A378C;
        color: whitesmoke;
        font-size: 1em;
    }
`

export default PrimaryButton;
