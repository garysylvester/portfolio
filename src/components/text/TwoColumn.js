import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import { H3, MediumText } from "../styles/TextStyles"

export default function TwoColumns(props) {
  const { item } = props
  return (
    <Wrapper>
      <SectionHeader>
        <Title>{item.sectionTitle}</Title>
      </SectionHeader>
      <SectionContent>
        <LeftSide>
          <Description>{item.left}</Description>
        </LeftSide>
        <RightSide>
          <Description>{item.right}</Description>
        </RightSide>
      </SectionContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
    padding: ${spacing.dimension.spaceLargest}px 0;
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

  @media (max-width: 450px) {
    gap: 0;
  }
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
