import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import { H3, MediumText } from "../styles/TextStyles"

export default function AboutSection() {
  return (
    <AboutSectionWrapper>
      <SectionHeader>
        <Title>a little more about me</Title>
      </SectionHeader>
      <SectionContent>
        <LeftSide>
          <Description>
            <ul>
              <li>
                I focus on delivering seamless and useful solutions to meet our
                human needs.
              </li>
              <li>
                I am motivated by the desire to increase delightful moments by
                maintaining a positive, ethical, detail, attentive, and
                open-minded approach while understanding systems, people, and
                technology to create solutions for some of the world’s most
                influential problems.
              </li>
              <li>
                I'm passionate about learning and expanding collaboration
                strategies. I'm into photography (film + digital), videography,
                fishing, motorcycles, and culinary arts.
              </li>
            </ul>
          </Description>
        </LeftSide>
        <RightSide>
          <Description>
            <ul>
              <li>
                I'm attracted to places, people, teams that really have a
                purpose + vision to evolve how we live and interact with each
                other, using language and interaction to engage people in
                innovative ways.
              </li>
              <li>
                I aim to solve problems or improve current solutions that make
                us, better.
              </li>
              <li>
                I like to code and prototype the solutions we design, aiming to
                improve collaboration and communication within my teams.
              </li>
              <li>
                I appreciate loyalty and honesty, teamwork and collaboration,
                silence and time.
              </li>
            </ul>
          </Description>
        </RightSide>
      </SectionContent>
    </AboutSectionWrapper>
  )
}

const AboutSectionWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  width: calc(100% - 96px);
  height: auto;
  display: grid;
  gap: ${spacing.dimension.spaceLarge}px;
  grid-template-rows: auto 1fr;
  padding: ${spacing.layout.spaceMicro}px 0;

  @media (max-width: 450px) {
    width: calc(100% - 48px);
    padding-top: ${spacing.dimension.spaceLargest}px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 48px);
  }
`

const LeftSide = styled.div`
  height: auto;
  display: grid;
  justify-content: flex-start;
  grid-template-rows: auto 1fr;
  gap: ${spacing.dimension.spaceMedium}px;
`

const RightSide = styled.div`
  height: auto;
`

const Title = styled(H3)`
  height: auto;
`

const Description = styled(MediumText)``

const SectionHeader = styled.div``

const SectionContent = styled.div`
  display: grid;
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
