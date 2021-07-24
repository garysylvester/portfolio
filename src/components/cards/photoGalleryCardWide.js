import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import Image3x2 from "../images-components/image3x2"

export default function PhotoGalleryCardWide(props) {
  const { item } = props
  return (
    <Wrapper>
      <Image3x2 item={item} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: calc(100% - 96px);
  padding-bottom: 66.66%;
  height: 500px;
  border-radius: ${spacing.dimension.spaceMedium}px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`
