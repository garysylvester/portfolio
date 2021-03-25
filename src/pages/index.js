import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AboutSection from "../components/sections/AboutSection"
import HeroSection from "../components/sections/HeroSection"
import ProjectSection from "../components/sections/ProjectSection"
import ParallaxSection from "../components/sections/ParallaxSection"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <ProjectSection />
    </Layout>
  )
}
