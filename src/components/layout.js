import React from "react"
// import Navbar from "../components/navbar"
import Navbar2 from "../components/navbar2"
// import Navbar3 from "../components/navbar3"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        {/* <Navbar3 /> */}
        <Navbar2 />
        {/* <Navbar /> */}
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
