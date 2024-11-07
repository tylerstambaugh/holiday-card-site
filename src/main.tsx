import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive'
import { Analytics } from '@vercel/analytics/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';


declare module '@mui/material/styles' {
  interface Theme {
    greenbutton: {
      main: string;
      hover: string;
    };
    redbutton: {
      main: string;
      hover: string;
    };
  }
  interface ThemeOptions {
    greenbutton?: {
      main?: string;
      hover?: string
    };
    redbutton?: {
      main?: string;
      hover?: string
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main:
        blue[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  greenbutton: {
    main: '#228B22',
    hover: '#1c721c'
  },
  redbutton: {
    main: '#8B0000',
    hover: '#660505'
  }
},
);

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
