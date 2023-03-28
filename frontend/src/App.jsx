import { useState } from 'react'
import './App.scss'
import { About, Header, Footer, Education, Skills, Experience, Testimonial, Work, Interests } from './container/index'
import { Navbar } from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Work />
      <Experience />
      <Interests/>
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
