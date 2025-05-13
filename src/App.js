import "./styles/Common.css";
import 'react-tooltip/dist/react-tooltip.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </Router>
  );
}

export default App;
