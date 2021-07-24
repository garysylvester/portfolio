import React from "react"
import styled, { keyframes } from "styled-components"
import { H2, MediumText, SmallText2 } from "../styles/TextStyles"
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
            William <span>Gary</span> Sylvester — Design Technologist
          </Title>
          <Name>
            A <span>maker</span> and his works; from UX to sandwiches.
          </Name>
          <Desctiption>
            Currently a Senior UX designer at Electronic Arts focusing on
            eCommerce on ea.com.
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
  display: flex;
  justify-content: center;
  height: 800px;
  width: 100%;

  @media (max-width: 1072px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 450px) {
    height: 600px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  width: calc(100% - 96px);
  position: absolute;
  margin: 0 auto;
  bottom: 50%;
  transform: translateY(50%);
  height: auto;
  display: grid;
  grid-template-columns: 460px auto;
  gap: ${spacing.dimension.spaceLarger}px;

  @media (max-width: 880px) {
    grid-template-columns: auto;
    border-radius: 0 16px 0 0;
    padding: 24px;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 1);
    width: auto;
    transform: translateY(0);
    gap: ${spacing.dimension.spaceMedium}px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: ${spacing.dimension.spaceMedium}px;
    transform: translateY(0);
  }

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: ${spacing.dimension.spaceMedium}px;
    padding: 0;
    background: transparent;
    padding: 24px;
    bottom: 32px;
    transform: translateY(0);
  }
`
const TextWrapper = styled.div`
  max-width: 460px;
  display: grid;
  gap: ${spacing.dimension.spaceLarger}px;

  @media (max-width: 880px) {
    gap: ${spacing.dimension.spaceMedium}px;
    max-width: 300px;
  }

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
const Title = styled(SmallText2)`
  font-size: 14px;

  span {
    color: ${color.neutrals.neutral1000};
    font-weight: 800;
  }
`

const Name = styled(H2)`
  color: ${themes.light.text1};

  @media (max-width: 880px) {
    font-size: 40px;
  }

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
