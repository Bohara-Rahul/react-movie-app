import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemCard = ({ item }) => {
  
    const getItemDetails = async (id, media_type) => {
        const response = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        const itemDetails = await response.json()  
        console.log(itemDetails)                   
      }

  return (
      <Wrapper>
            <Link to={`/item/${item.id}`} className="link-container">
                <article 
                key={item.id} 
                onClick={() => getItemDetails(item.id, item.media_type)}
                >
                    <img 
                        src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} 
                        alt={item.name || item.title} 
                    />
                    <h2>{item.media_type === "movie" ? item.title : item.name}</h2>
                </article>
            </Link>
       </Wrapper>
  )
}

const Wrapper = styled.div`
    .link-container {
        text-decoration: none;
    }
`

export default ItemCard