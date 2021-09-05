import React from 'react';
import apiMap from '../constants/apiMap';

export default function AboutPage(props) {
  console.log(props)
  return (
    <h1>
      Hello World
    </h1>
  )
}

AboutPage.getInitialProps = async () => {
  console.log(process.env.SPOTIFY_API_TOKEN)
  const response = await fetch(apiMap.SPOTIFY_GET_CURRENT_PLAYING_TRACK, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SPOTIFY_API_TOKEN}`,
      'Accept': 'application/json'
    }
  });
  
  const data = await response.json();

  return {
    data,
  }
}