import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './assets/pages/About.jsx'
import Portfolio from './assets/pages/Portfolio.jsx'
import Contact from './assets/pages/Contact.jsx'
import Resume from './assets/pages/Resume.jsx'
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
