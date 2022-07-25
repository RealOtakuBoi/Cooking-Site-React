import React from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { GiConsoleController } from 'react-icons/gi';


function Recipes() {

    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
        console.log(detailsData);
    }

    useEffect(() => {
        fetchDetails(params.name);
    },[params.name])

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <StyleButton className={activeTab === 'instructions'? 'active': ''} onClick={() => setActiveTab('instructions')}>Instructions</StyleButton>
            <StyleButton className={activeTab === 'ingridents'? 'active': ''} onClick={() => setActiveTab('ingridents')}>Ingredients</StyleButton>
            <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3>
            </div>
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;


    .active{
        background: #FFD700;
        color: black;
    }

    h2{
        margin-bottom: 2rem;

    }

    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }
    
    img{
        border-radius: 2rem;
    }
    
    `;

    const StyleButton = styled.div`
        padding: 1rem 2rem;
        color: #FFD700;
        background: black;
        border: 2px solid black;
        margin-bottom: 2rem;
        font-weight: 600;
        cursor: pointer;
    `;

    const Info = styled.div`
    margin-left: 10rem`;

export default Recipes