import { useState } from 'react'
import './App.scss'
import { About, Header, Footer, Skills, Testimonials, Work } from './container/index'
import { Navbar } from './components/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
