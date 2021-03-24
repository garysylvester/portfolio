import React from "react"
import styled from "styled-components"
import { spacing, color } from "../../constraints/Tokens"
import { SmallText2 } from "../styles/TextStyles"

export default function InstagramTag(props) {
  const { item } = props
  return (
    <TagWrapper>
      <TagInner>
        <img src="/images/icons/ig.svg" alt={item.title}></img>
        <TagLabel>{item.instagram}</TagLabel>
      </TagInner>
    </TagWrapper>
  )
}

const TagWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: fit-content;
  justify-self: flex-end;
  text-align: right;
  z-index: 2;
  padding: ${spacing.dimension.spaceSmallest}px
    ${spacing.dimension.spaceSmaller}px ${spacing.dimension.spaceSmallest}px
    ${spacing.dimension.spaceSmallest}px;
  border-radius: 6px;
  position: absolute;
  top: ${spacing.dimension.spaceMedium}px;
  left: ${spacing.dimension.spaceMedium}px;
`
const TagInner = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  color: ${color.neutrals.neutral0};
  display: grid;
  grid-template-columns: 16px auto;
  justify-content: center;
  align-items: center;
  gap: ${spacing.dimension.spaceSmallest}px;
`

const TagLabel = styled(SmallText2)``
