import React from "react"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"

export default function HeroPortrait() {
  return (
    <HeroWrapper>
      <ImageWrapper>
        <Parallax className="imageTest" y={[-30, 30]}>
          <Image src="/images/background/hero-portrait.png" alt="portrait" />
        </Parallax>
      </ImageWrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  width: auto;
  height: 800px;
  position: absolute;
  z-index: -1;
  right: 15%;
  transition: all 0s ease-in-out;

  @media (max-width: 1280px) {
    right: 2%;
  }

  @media (max-width: 1072px) {
    right: 5%;
    height: 800px;
  }

  @media (max-width: 1072px) {
    right: 2%;
    height: 600px;
  }

  /* @media (max-width: 768px) {
  } */

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
  }
  :hover {
    filter: brightness(150%) saturate(120%);
  }

  .portrait {
    position: absolute;
    width: auto;
    height: 800px;
    right: 0px;
    top: 0px;
    background-size: cover;

    @media (max-width: 1072px) {
      height: 600px;
    }

    @media (max-width: 450px) {
      bottom: 0px;
      height: 600px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  .imageTest {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1072px) {
      height: 600px;
    }
  }
`

const Image = styled.img`
  height: 800px;

  @media (max-width: 1072px) {
    height: 600px;
  }
`
