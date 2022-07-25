import React, { useState } from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

function Food() {

    const navigate = useNavigate();


    const [input, setInput] = useState('');

    const SubmitHandler = (e) =>{
        e.preventDefault();
        navigate('/Searched/'+input)

    }

  return (
    <div>
        <FormStyle onSubmit={SubmitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type= 'text' value={input}/>
            </div>
        </FormStyle>
        </div>
  )
}


const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;

    div{
        width: 100%;
        position: relative;
    }



    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: rgb(97, 97, 97);
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;

    }

    
    
    
    
    `;

export default Food