import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AboutSection from "../components/sections/AboutSection"
import HeroSection from "../components/sections/HeroSection"
import PhotographySection from "../components/sections/PhotographySection"
import ParallaxSection from "../components/sections/ParallaxSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import Footer from "../components/sections/Footer"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <PhotographySection />
      <ProjectsSection />
      <Footer />
    </Layout>
  )
}
