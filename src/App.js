import React from "react"
import NavBar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Newsletter from "./Components/Newsletter/Newsletter"
import Footer from "./Components/Footer/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}

export default App
