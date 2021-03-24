import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { spacing } from "../../constraints/Tokens"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "12px" : "0px")};
  padding: ${spacing.dimension.spaceSmaller}px;
  align-items: center;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
