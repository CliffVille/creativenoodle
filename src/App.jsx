import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import './app.css'

function App() {

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
    </div>
  );
}

export default App
