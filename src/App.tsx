import { usePageTracking } from "./components/usePageTracking";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive'
import { Analytics } from '@vercel/analytics/react';

export default function App ()  {
   usePageTracking();
   
    return (
        
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/archive" element={<Archive />} />
                    </Routes>
                    <Footer />
                    <Analytics />
                </div>
    );
};
