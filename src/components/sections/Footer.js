import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
// import { H3, MediumText } from "../styles/TextStyles"

export default function Footer() {
  return (
    <AboutSectionWrapper>
      <SectionContent>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </SectionContent>
    </AboutSectionWrapper>
  )
}

const AboutSectionWrapper = styled.div`
  max-width: 1234px;
  background: #141414;
  margin: 0 auto;
  width: 100%;
  height: auto;
  display: grid;
  gap: ${spacing.dimension.spaceLarge}px;
  grid-template-rows: auto 1fr;
  padding: ${spacing.layout.spaceMicro}px 0;
  margin-top: ${spacing.layout.spaceMicro}px;

  @media (max-width: 450px) {
    width: calc(100% - 48px);
    padding: ${spacing.dimension.spaceLargest}px 0;
  }

  @media (max-width: 768px) {
    width: calc(100% - 48px);
  }
`

const SectionContent = styled.div`
  display: grid;
  max-width: 1234px;
  width: calc(100% - 96px);
  margin: 0 auto;
  gap: ${spacing.dimension.spaceLarge}px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

const LeftSide = styled.div`
  height: 300px;
  background: purple;
  display: grid;
  justify-content: flex-start;
  grid-template-rows: auto 1fr;
  gap: ${spacing.dimension.spaceMedium}px;

  @media (max-width: 450px) {
    gap: 0;
  }
`

const RightSide = styled.div`
  height: 300px;
  background: teal;
`
