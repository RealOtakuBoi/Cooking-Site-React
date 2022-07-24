import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

  const [popular, setPopular] = useState([]);

  
  useEffect(() => {
    getPopular();
  },[])

  const getPopular = async () => {
    let check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }

    


    
  }

  return (
  <Wrapper>

    
    <h3>Popular Picks</h3>
    <Splide options={{
      perPage:4,
      gap: '3rem',
      pagination: false,
      arrows: false,
      drag: 'free',
    }}>
    {popular.map((recipe) => {
      return(
        <SplideSlide key={recipe.id}>
        <Card>
          <p>{recipe.title}</p>
          <Gradient>
          <img src={recipe.image} alt={recipe.title}></img>
          </Gradient>
        </Card>
        </SplideSlide>
      );
    })}
    </Splide>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  `;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img{
    transform: scale(0.8);
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;
    z-index: 1;

  }

  p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    z-index: 10;
    color: white;
  }
  
  `;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%
  width: 100%
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));`

export default Popular