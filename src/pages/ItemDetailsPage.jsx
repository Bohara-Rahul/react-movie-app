import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ItemPage = () => {
  const [item, setItem] = useState({})
  const { media_type, id } = useParams()

  const getItemDetails = async (id, media_type) => {
    const response = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
    const itemDetails = await response.json()
    setItem(itemDetails)                     
  }

  useEffect(() => {
    getItemDetails(id, media_type)
  }, [id, media_type])

  
  return (
    <Wrapper>
      { item && (
        <>
        <img 
          src={"https://image.tmdb.org/t/p/w500" + item.poster_path} 
          alt={media_type === 'movie' ? item.title : item.name}
        />
      
      <article>
        <h2>
          {item.name || item.original_title} {item.tagline && (<span>{item.tagline.split('.')[0]}</span>)}
        </h2>
        <p>Overview: {item.overview}</p>
        <p>{item.release_date 
          ? `Released on: ${item.release_date}`
          : `First Aired on: ${item.first_air_date}`}
          </p>
        {item.budget && (
          <p>Total Budget: <span className="budget">${item.budget}</span></p>
        )}
        
        {item.revenue && (
          <p>Total Revenue: <span className="revenue">${item.revenue}</span></p>
        )}
        {item.number_of_seasons && (
          <p>No, of seasons: {item.number_of_seasons}</p>
        )}
        {item.number_of_episodes && (
          <p>No, of Episodes: {item.number_of_episodes}</p>
        )}
        <p>Popularity: {item.popularity}</p>
        {item.genres && (
        <p className="genres">Genres: {item.genres.map(genre => (
          <span className="genre" key={genre.id}>{genre.name}</span>
          ))}
        </p>
        )}

        <a href={`${item.homepage}`} target="_blank" rel='noreferrer'>Homepage</a>
      </article>
      </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
 
  img {
    border-radius: 1rem;
    height: 40rem;
    margin-right: 4rem;
  }

  .budget {
    color: red;
  }

  .revenue {
    color: green;
  }

  .genre {
    width: 5rem;
    height: 2rem;
    background-color: #ece1e1;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }

  @media screen and (max-width: 600px) {
     flex-wrap: wrap;
     img {
       height: 30rem;
     }
     article {
       margin: auto;
     }
  }
`

export default ItemPage