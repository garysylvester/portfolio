import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { color, spacing } from "../../constraints/Tokens"
import BackrgoundSection from "../backgrounds/HeroBackground"

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <BackrgoundSection />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            hi, i'm <span>gary</span>
          </Title>
          <Desctiption>
            i'm a senior ux designer at Electronic Arts, where I spend my days
            finding ways to inspire the world to play.
          </Desctiption>
        </TextWrapper>
      </ContentWrapper>
    </HeroSectionWrapper>
  )
}

const animation = keyframes` 
  0% { opacity: 0; transform: translateY(-10px);}
  100% { opacity: 1; transform: translateY(0px);}
`

const HeroSectionWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 800px;

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 450px) {
    height: 600px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  position: absolute;
  margin: 0 auto;
  bottom: 50%;
  transform: translateY(50%);
  padding: 0 32px;
  height: auto;
  display: grid;
  grid-template-columns: 360px auto;
  gap: ${spacing.dimension.spaceLarger}px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: ${spacing.dimension.spaceMedium}px;
    bottom: 32px;
    transform: translateY(0);
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: ${spacing.dimension.spaceLarger}px;

  @media (max-width: 450px) {
    gap: ${spacing.dimension.spaceMedium}px;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.light.text1};

  @media (max-width: 450px) {
    font-size: 40px;
    color: ${themes.dark.text1};
  }

  span {
    color: ${color.brand.brandPrimary};
  }
`

const Desctiption = styled(MediumText)`
  @media (max-width: 450px) {
    color: ${themes.dark.text1};
  }
`
