import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import banner_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="banner">
          <img src={hero_banner} alt="" className="banner-img" />
          <div className="banner-caption">
            <img src={banner_title} alt="" className="caption-img" />
            <p>
              Discover his ties to a secret acent order, a yung man living from
              an immoral enamy
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
