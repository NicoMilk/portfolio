import React from "react"
import Navigation from "./navigation"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, padding: `0 0rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Navigation />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
