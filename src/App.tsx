
import { Outlet, Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer';
import { Archive } from './pages/archive';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the nested child route */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a layout route to include Header and Footer */}
        <Route path="/" element={<Layout />}>
          {/* Home component will be rendered in the Outlet */}
          <Route path="/home" index element={<Home />} />
          <Route path="/archive" index element={<Archive />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App