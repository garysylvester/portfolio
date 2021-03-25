import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import "./layout.css"

function AppLayout({ children }) {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ParallaxProvider>
  )
}

export default AppLayout
