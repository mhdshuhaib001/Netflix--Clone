import React, { useEffect, useState } from 'react'

import axios from "../../axios";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import banner_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import {API_KEY,imageUrl} from '../../Constants/Constants'

export default function Home() {
  
  const [banner,setBanner] =useState('')
  useEffect(()=>{
    const randomNumber = Math.floor(Math.random() * 20);
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setBanner(response.data.results[randomNumber])
        console.log(response.data.results[randomNumber]);
      })
  },[])
  const backgroundImageUrl = banner ? `${imageUrl}${banner.backdrop_path}` : "";

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="banner">
          <img src={backgroundImageUrl} alt="" className="banner-img" />
          <div className="banner-caption">
            {/* <img src={banner_title} alt="" className="caption-img" /> */}
            <h1 className='title'>{ banner.original_title ||banner.original_name }</h1>
            <p>
            { banner.overview }
            </p>
            <div className="banner-btn">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={info_icon} alt="" />
                More Info
              </button>
            </div>
            <TitleCard />
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title={"Blockbuster Movies"} categery={"top_rated"} />
          <TitleCard title={"Only on Netflix"} categery={"popular"} />
          <TitleCard title={"Upcoming"} categery={"upcoming"} />
          <TitleCard title={"Top Pices For You"} categery={"now_playing"} />
        </div>
        <Footer />
      </div>
    </>
  );
}
