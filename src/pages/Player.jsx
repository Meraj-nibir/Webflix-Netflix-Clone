import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import trailer from '../assets/trailer.mp4'
export default function Player() {
    const navigate = useNavigate();
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=> navigate(-1)}/>
            </div>
            <video src={trailer} autoplay loop controls muted></video>
        </div>
    </Container>
  )
}

const Container = styled.div`

`;
