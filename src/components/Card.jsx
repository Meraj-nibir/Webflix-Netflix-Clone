import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import trailer from '../assets/trailer.mp4';
import {IoPlayCircleSharp, IoPlayCircleSharp} from "react-icons/io5";
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
export default function Card(movieData, isLiked = false ) {
  
  const [isHovered, setIsHoevred] = useState(false);
  const navigate = useNavigate();
  return <Container onMouseEnter = {() => setIsHoevred(true)} onMouseLeave={()=> setIsHoevred(false)}>
    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />

    {
      isHovered && (
        <div className='hover'>
          <div className='image-video-container'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
              alt="movie"
              onClick={()=>navigate("/player")} 
            />
            <video src={trailer} 
            autoPlay loop muted
            onClick={()=>navigate("/player")}/>
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={()=>navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp title="Play"
                onClick={()=>navigate("/player")}/>
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck
                    title="Remove from List"
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  </Container>
}
const Container = styled.div``;
