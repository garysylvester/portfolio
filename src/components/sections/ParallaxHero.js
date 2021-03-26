import React from "react"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import { color } from "../../constraints/Tokens"
import { BodyIntro, H2 } from "../styles/TextStyles"

export default function ParallaxHero(props) {
  const { item } = props
  return (
    <SectionWrapper>
      <InnerDiv>
        <Title>{item.title}</Title>
        <Subtitle>{item.camera}</Subtitle>
      </InnerDiv>
      <ImageWrapper>
        <Parallax className="BGimage" y={[-30, 30]}>
          <Image src={item.hero} alt={item.title} />
        </Parallax>
      </ImageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 600px;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    height: 400px;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;

  .BGimage {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
      width: 100%;
      height: 400px;
    }
  }
`
const Image = styled.img`
  height: 760px;

  @media (max-width: 450px) {
    height: 592px;
  }
`

const InnerDiv = styled.div`
  width: 680px;
  text-align: center;
  height: auto;
  z-index: 1;
  display: grid;
  gap: 12px;
`

const Title = styled(H2)`
  color: ${color.neutrals.neutral0};
`

const Subtitle = styled(BodyIntro)`
  color: ${color.neutrals.neutral0};
`
