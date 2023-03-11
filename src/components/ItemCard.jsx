import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemCard = ({ item }) => {
  return (
      <Wrapper>
            <Link to={`/item/${item.media_type}/${item.id}`} className="link-container">
                <article 
                key={item.id} 
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
    margin: 0 auto;
    .link-container {
        text-decoration: none;
        color: #f1efef;
    }
`

export default ItemCard