import React from "react"
import styled from "styled-components"
import HeroPortrait from "../animations/HeroPortrait"

export default function BackrgoundSection() {
  return (
    <BGWrapper>
      <Background />
      <HeroPortrait />
    </BGWrapper>
  )
}

const BGWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
  background: #ffffff;

  @media (max-width: 450px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }
`
