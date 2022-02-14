import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Items from "../components/Items";

const HomePage = () => {
  const [trending, setTrending] = useState([])
  
  useEffect(() => {
    fetchTrending()
  }, [])

  const fetchTrending = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        )
        const data = await response.json()
        setTrending(data.results)
  }
  
  return (
      <Wrapper>
          <h1>Movie App</h1>
           {trending && <Items trending={trending} />}
      </Wrapper>
  );
};

const Wrapper = styled.div`
    max-width: 1200px;
    width: 100vw;
    margin: auto;

    h1 {
      text-align: center;
      color: green;
      font-weight: bold;
      font-size: 3rem;
    }
   
`

export default HomePage;
