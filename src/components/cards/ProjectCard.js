import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import SiteTag from "../tags/SiteTag"
import InstagramTag from "../tags/InstagramTag"
import { H5, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function ProjectCard(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <ProjectCardWrapper>
        <ProjectCardImageWrapper>
          <InstagramTag item={item} />
          <CardImage item={item}>
            <img src={item.image} alt={item.title} />
          </CardImage>
        </ProjectCardImageWrapper>
        <ProjectCardTextWrapper>
          <CardLocation>{item.location}</CardLocation>
          <CardMeta className="cameraName">{item.camera}</CardMeta>
          <CardDate>{item.date}</CardDate>
          <SiteTag item={item} />
        </ProjectCardTextWrapper>
      </ProjectCardWrapper>
    </Link>
  )
}

const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  background: #ffffff;
  border-radius: ${spacing.dimension.spaceMedium}px;
  overflow: hidden;

  *,
  & {
    transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 0.5);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 10px 15px rgba(23, 0, 102, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-10px);
  }
`

const CardImage = styled.div`
  transform: scale(1);
  max-width: 100%;
  overflow: hidden;

  * {
    max-width: 100%;
    z-index: -1;

    ${ProjectCardWrapper}:hover & {
      transform: scale(1.1);
    }
  }
`

const ProjectCardImageWrapper = styled.div`
  position: relative;
`

const ProjectCardTextWrapper = styled.div`
  height: auto;
  padding: ${spacing.dimension.spaceMedium}px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;
  gap: ${spacing.dimension.spaceSmaller}px;

  .cameraName {
    justify-self: flex-end;
    text-align: right;
  }
`

const CardLocation = styled(H5)`
  color: ${themes.light.text1};
`
const CardMeta = styled(SmallText)`
  color: ${themes.light.text1};
`
const CardDate = styled(SmallText)`
  color: ${themes.light.text1};
`
