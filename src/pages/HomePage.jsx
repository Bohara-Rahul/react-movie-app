import { useState, useEffect } from 'react'
import styled from 'styled-components';
import ItemCard from "../components/ItemCard";

const HomePage = () => {
  const [trending, setTrending] = useState([])
  
  useEffect(() => {
    fetchTrending()
  }, [])

  const fetchTrending = async () => {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?api_key=9d594f4f94b6890b2e3a64f3c7a0a6b1'
        )
        const data = await response.json()
        setTrending(data.results)
  }
  
  return (
      <Wrapper>
           {trending && <ItemCard trending={trending} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    max-width: 960px;
    width: 100vw;
    margin: auto;
   
`

export default HomePage;
