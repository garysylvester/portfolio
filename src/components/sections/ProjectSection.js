// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import { H3 } from "../styles/TextStyles"
import { projectCardData } from "../../data/projectData"
import ProjectCard from "../cards/ProjectCard"

export default function ProjectSection() {
  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionInner>
          <SectionTitle>Photography Collections</SectionTitle>
          <h2>Filters</h2>
        </SectionInner>
      </SectionHeader>
      <GridWrapper>
        {projectCardData.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </GridWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  width: calc(100% - 96px);
  display: grid;
  gap: ${spacing.dimension.spaceLarger}px;
  grid-template-rows: repeat(2, auto);
  padding-top: ${spacing.layout.spaceMicro}px;

  @media (max-width: 450px) {
    max-width: 100%;
    width: calc(100% - 32px);
    padding-top: ${spacing.dimension.spaceLarger}px;
  }
`

const SectionInner = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
`

const SectionHeader = styled.div`
  width: 100%;
  padding: ${spacing.dimension.spaceLarge}px 0;
`

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: ${spacing.dimension.spaceLarge}px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`
const SectionTitle = styled(H3)``
