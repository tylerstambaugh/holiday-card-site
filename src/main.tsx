import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive'
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import ReactGA4 from 'react-ga4';

ReactGA4.initialize("G-8XM0MY1NDQ");

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  </StrictMode>
  ,
)
