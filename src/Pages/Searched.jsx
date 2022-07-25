import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';

function Searched() {

    const params = useParams();

    const [searchedRecipe, setSearchedRecipe] = useState([]);

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipe(recipes.results);
    }

        useEffect(() => {
            getSearched(params.search)
        },[params.search])
  return (
    <Grid>
        {searchedRecipe.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
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

export default Searched