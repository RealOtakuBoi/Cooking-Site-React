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
    setCusine(recipes.results);
  }

  useEffect(() => {
    getCusine(params.type);
  },[params.type])
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    
    >
      {cusine.map(item => {
        return(
          <Card key={item.id}>
            <Link to={`/recipe/`+item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          </Link>
        </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr 1fr; 
gap: 3rem;
  `;

const Card = styled.div`
  img{
    widht:100%;
    border-radius: 2rem;
  }
  
  a{
    text-decoration:none;
  }

  h4{
    text-align:center;
    padding: 1rem;
  }


  `;


export default Cusine