import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import App from './App';
import ReactGA4 from 'react-ga4';

ReactGA4.initialize([
  {
    trackingId: "G-8XM0MY1NDQ",
  },
]);


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
  
)
