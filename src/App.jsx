import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Headerb from './components/headerb'
import Footer from './components/footer'
import './app.css'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Headerb />
        <Footer />
      </div>
    </Router>
  );
}

export default App
