
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive';


function App() {
  return (
        <Router>
      <Header />
      <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
      </main>
      <Footer />
        </Router>
  );
}

export default App