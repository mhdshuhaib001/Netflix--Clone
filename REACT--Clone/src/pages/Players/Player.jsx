import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Player.css";
import backArrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY } from "../../Constants/Constants"; 

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        console.log("API Response:", response.data);
        if (response.data.results && response.data.results.length > 0) {
          setApiData(response.data.results[0]);
        } else {
          console.error("No trailer found for this movie");
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };
  
    fetchTrailer();
  }, [id]);
  
  return (
    <div className="player">
      <img src={backArrow_icon} alt="" onClick={() => navigate(-1)} />
      {apiData.key && (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1`} 
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        {apiData.published_at && <p>{apiData.published_at.slice(0, 10)}</p>}
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
