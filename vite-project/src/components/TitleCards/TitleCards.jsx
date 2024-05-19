import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

export default function TitleCard({ title, categery }) {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODJmYzE1Y2QwNzEyNjI5N2Q3NzJlZmZiZTZlNjg0YiIsInN1YiI6IjY2MmM3Y2U1MzU4MTFkMDEyMmU3YzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7AWJAWiIzM-L6DsJXqy08dGsH_9xZOabMhSWLI7AAg",
    },
  };

  const handleWheels = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY * 7;
  };
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${categery ? categery : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("wheel", handleWheels);
    }
    return () => {
      if (cardElement) {
        cardElement.removeEventListener("wheel", handleWheels);
      }
    };
  }, [categery]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
