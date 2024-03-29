import { useState } from 'react'
import styled from "styled-components";
import ItemCard from './ItemCard';

const Items = ({ trending }) => {
  const [allTab, setAllTab] = useState(true)
  const [moviesTab, setMoviesTab] = useState(false)
  const [tvShowsTab, setTvShowsTab] = useState(false)

  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])

  const handleMoviesTabClick = () => {
    setAllTab(false)
    setMoviesTab(true)
    setTvShowsTab(false)

    setMovies(trending.filter(item => item.media_type === "movie"))
  }

  const handleTvTabClick = () => {
    setAllTab(false)
    setMoviesTab(false)
    setTvShowsTab(true)

    setTvShows(trending.filter(item => item.media_type === "tv"))
  }

  return (
      <Wrapper>
            <h2>Trending this week</h2>
            <section className="btn-container">
                <button onClick={() => {
                    setMoviesTab(false)
                    setTvShowsTab(false)
                    setAllTab(true)
                }}
                className={allTab && 'btn-active'}
                >
                    All
                </button>
                <button onClick={handleMoviesTabClick}
                className={moviesTab && 'btn-active'}
                >
                    Movies
                </button>
                <button onClick={handleTvTabClick}
                className={tvShowsTab && 'btn-active'}
                >
                    TV Shows
                </button>
            </section>
        <section className="item-container">  
        {allTab && trending.map(item => (
         <ItemCard key={item.id} item={item} />
        ))}
         {moviesTab && movies.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
        {tvShowsTab && tvShows.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
        </section>  
      </Wrapper>
    )
};

const Wrapper = styled.div`
 text-align: center;
  h2 {
    text-align: center;
  }
   button {
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        margin-left: 1rem;
    }
    .btn-container {
        margin: 1rem auto;
        padding: 1.5rem;
    }
    .btn-active {
        background-color: #481977;
        color: #fff;
    }
    .item-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
    }
    img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
      border-radius: 1rem;
    }
    
`

export default Items
