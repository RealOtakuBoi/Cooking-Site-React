import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Cusine() {

  const [cusine, setCusine] = useState([]);
  let params = useParams();
  
  const getCusine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cusine=${name}`);
    const recipes = await data.json();
    setCusine(recipes.result);
  }

  useEffect(() => {
    getCusine(params.type);
  },[params.type])
  return (
    <div>

    </div>
  )
}

export default Cusine