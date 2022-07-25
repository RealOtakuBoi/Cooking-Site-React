import React from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';


function Recipes() {

    const [details, setDetails] = useState([])

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
    }

    useEffect(() => {
        fetchDetails(params.name);
    },[params.name])

  return (
    <div>{details.title}</div>
  )
}

export default Recipes