import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"

export default function ParallaxSection() {
  return (
    <SectionWrapper>
      <InnerDiv></InnerDiv>
      <ImageWrapper>
        <Parallax className="imageTest" y={[-20, 20]}>
          <Image
            src="/images/background/flower-shop-sky7.jpg"
            alt="background"
          />
        </Parallax>
      </ImageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  width: calc(100% - 96px);
  height: 800px;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;

  .imageTest {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Image = styled.img`
  height: 960px;
`

const InnerDiv = styled.div`
  width: 200px;
  height: 96px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1;
  margin: 24px;
`
