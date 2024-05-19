import React, { useEffect ,useState} from "react";
import "./Player.css";
import backArrow_icon from "../../assets/back_arrow_icon.png";

import { useNavigate, useParams } from "react-router-dom";
function Player() {

  const {id}= useParams();

  const navigate = useNavigate()
  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODJmYzE1Y2QwNzEyNjI5N2Q3NzJlZmZiZTZlNjg0YiIsInN1YiI6IjY2MmM3Y2U1MzU4MTFkMDEyMmU3YzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7AWJAWiIzM-L6DsJXqy08dGsH_9xZOabMhSWLI7AAg",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  
  return (
    <div className="player">
      <img src={backArrow_icon} alt=""  onClick={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        autoPlay
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
