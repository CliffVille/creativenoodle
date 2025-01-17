import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/About'
import Footer from './components/footer'
import './app.css'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
