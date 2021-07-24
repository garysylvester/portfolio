import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ParallaxHero from "../../components/sections/ParallaxHero"
import TwoColumns from "../../components/text/TwoColumn"
import { Collection1PageData } from "../../data/photography/collection1Data"

export default function Collection1() {
  return (
    <Layout>
      <SEO title="Home" />
      {Collection1PageData.map(item => (
        <ParallaxHero item={item} />
      ))}

      {Collection1PageData.map(item => (
        <TwoColumns item={item} />
      ))}

      <CollectionGallery>
        {/* <Image3x2 image={"/images/photography/test-image-01.jpg"} /> */}
      </CollectionGallery>
    </Layout>
  )
}

const CollectionGallery = styled.div`
  display: grid;
  grid-template-rows: 500px;
`
