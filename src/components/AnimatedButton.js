import React from 'react';
import arrow from '../img/arrow.svg';
import styled from 'styled-components';

function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow" />
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: whitesmoke;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: all .4s ease-in-out;
    .arrow{
        padding-left: .9rem;
        transition: all 300ms ease-in-out;
    }
    &:hover{
        transition: all 300ms ease-in-out;
        .arrow{
            padding-left: 1.4rem;
        }
    }
`;

export default AnimatedButton;