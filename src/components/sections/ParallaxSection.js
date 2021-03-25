import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"

export default function ParallaxSection() {
  return (
    <Wrapper>
      <Parallax y={[-20, 20]}>
        <Image src="/images/background/parallax-test.jpg" alt="background" />
      </Parallax>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  padding-top: 96px;
  overflow: hidden;
  position: relative;
  z-index: -1;
`
const Image = styled.img`
  max-width: 100%;
`
