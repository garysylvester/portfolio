import React from "react"
import styled from "styled-components"
import { spacing, color } from "../../constraints/Tokens"
import { SmallText2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function SiteTag(props) {
  const { item } = props
  return (
    <TagWrapper>
      <TagInner>{item.tag}</TagInner>
    </TagWrapper>
  )
}

const TagWrapper = styled.div`
  background: ${color.neutrals.neutral200};
  width: fit-content;
  justify-self: flex-end;
  text-align: right;
  padding: ${spacing.dimension.spaceMicro}px
    ${spacing.dimension.spaceSmallest}px;
  border-radius: ${spacing.dimension.spaceMicro}px;
`
const TagInner = styled(SmallText2)`
  color: ${themes.light.text1};
`
