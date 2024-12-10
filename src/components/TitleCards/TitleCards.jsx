import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import "./TitleCards.css";
import { Link } from "react-router-dom";
import { API_KEY, imageUrl } from "../../Constants/Constants"; 

export default function TitleCard({ title, categery }) {
  const [movies, setMovies] = useState([]);
  const cardRef = useRef(null)
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${categery ? categery : "now_playing"}?language=en-US&page=1&api_key=${API_KEY}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [categery]);


  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {movies.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
            src={`${imageUrl + card.poster_path}`}
            alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
