import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { spacing } from "../../constraints/Tokens"
import SiteTag from "../tags/SiteTag"
import { H5, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function PhotoCard(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <ProjectCardWrapper>
        <ProjectCardImageWrapper>
          <CardImage item={item}>
            <img src={item.thumbnail} alt={item.title} />
          </CardImage>
        </ProjectCardImageWrapper>
        <ProjectCardTextWrapper>
          <CardLocation>{item.title}</CardLocation>
          <ImageCount>
            <CardMeta className="collection-size">{item.imageCount}</CardMeta>
            <img src="/images/icons/collection.svg" />
          </ImageCount>
          <CardDate>{item.method}</CardDate>
          <SiteTag item={item.tag} />
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
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);

  *,
  & {
    transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 0.5);
  }

  :hover {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
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

  .collection-size {
    justify-self: flex-end;
    text-align: right;
  }
`

const ImageCount = styled.div`
  display: grid;
  grid-template-columns: auto 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  height: auto;
  padding: 2px 0;

  p {
    padding-top: 2px;
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
