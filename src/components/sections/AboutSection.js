import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"

export default function AboutSection() {
  return (
    <Wrapper>
      <LeftSide>
        <h2>Heres a little more about me</h2>
      </LeftSide>
      <RightSide></RightSide>
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
  grid-template-columns: repeat(2, 1fr);
  padding-top: ${spacing.layout.spaceMicro}px;
`

const LeftSide = styled.div`
  background: red;
  height: 300px;
`

const RightSide = styled.div`
  background: blue;
  height: 300px;
`
