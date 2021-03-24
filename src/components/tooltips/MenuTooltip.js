import React from "react"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: ${spacing.dimension.spaceMedium}px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  display: grid;
  grid-template-columns: 150px;
  gap: ${spacing.dimension.spaceSmall}px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")} */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
