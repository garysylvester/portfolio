import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ParallaxHero from "../../components/sections/ParallaxHero"
import TwoColumns from "../../components/text/TwoColumn"
import { Collection1PageData } from "../../data/photographyData"

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
    </Layout>
  )
}
