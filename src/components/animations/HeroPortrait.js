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

  /* @media (max-width: 768px) {
  } */

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
  }

  div {
    transform: rotateY(0) rotateX(0);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.portrait {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .portrait {
    position: absolute;
    width: 800px;
    height: 896px;
    right: 0px;
    top: 0px;
    background: url("/images/background/hero-portrait.png");
    background-size: cover;

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
