import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Header, Footer, Education, Skills, Experience, Testimonial, Work, Interests } from './container/index'
import { Navbar } from './components/index'
import './App.scss'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={
              <div className="app">
              <Navbar />
              <Header />
              <About />
              <Education />
              <Skills />
              <Work />
              <Experience />
              <Interests/>
              {/* <Testimonial /> */}
              <Footer />
            </div>
            } />
            <Route path="/404notfound" element={<Footer />} />
        </Routes>
    </Router>
  )
}

export default App
