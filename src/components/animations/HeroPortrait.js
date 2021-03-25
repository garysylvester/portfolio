import React from "react"
import styled from "styled-components"

export default function HeroPortrait() {
  return (
    <HeroWrapper>
      <div className="portrait" />
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  width: 800px;
  height: 896px;
  position: absolute;
  z-index: -1;
  right: 20%;
  transition: all 0s ease-in-out;

  @media (max-width: 1280px) {
    right: 5%;
  }

  @media (max-width: 1072px) {
    right: 5%;
    width: 600px;
    height: 672px;
  }

  @media (max-width: 1072px) {
    right: 2%;
    width: 600px;
    height: 672px;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
  }
  :hover {
    filter: brightness(150%) saturate(120%);
  }

  .portrait {
    position: absolute;
    width: 800px;
    height: 896px;
    right: 0px;
    top: 0px;
    background: url("/images/background/hero-portrait.png");
    background-size: cover;

    @media (max-width: 1072px) {
      right: 0%;
      width: 600px;
      height: 672px;
    }

    /* @media (max-width: 768px) {
      top: -190px;
      right: -300px;
      transform: scale(0.4);
    } */

    @media (max-width: 450px) {
      bottom: 0px;
      width: 600px;
      height: 672px;
    }
  }
`
