import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg';

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name} 
            <img src={arrow} alt='arrow' />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: black;
    color: whitesmoke;
    border-radius: 20px;
    padding: 0.6em 2rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 300ms linear;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        padding-left: 1rem;
    }
    

    &:hover{
        background-color: #5A378C;
        color: whitesmoke;
`

export default SecondaryButton
