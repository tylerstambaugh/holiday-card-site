
import {  Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive';


function App() {
  return (
    <Router>
      <Header />
      <Routes>

          <Route index element={<Home />} />
          <Route path="/Archive" element={<Archive />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App