import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={'/cusine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cusine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cusine/Chinese'}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </Slink>
        <Slink to={'/cusine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin: 2rem 0rem;
    `;


const Slink = styled(NavLink)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius:50%;
    margin-right: 2rem;
    text-decoration: none;
    cursor:pointer;
    background: #131313;
    transform: scale(0.7);
    
    
    h4{
        font-size: 0.8rem;
    }

    svg{
        color: #FFD700;
        font-size: 2.5rem;
    }

    &.active{
        background: #FFD700;

        svg{
            color: black;
        }

        h4{
            color: black;
        }
    }
    
    `;

export default Category


