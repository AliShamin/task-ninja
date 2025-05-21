import "./styles/Common.css";
import 'react-tooltip/dist/react-tooltip.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </Router>
  );
}

export default App;
