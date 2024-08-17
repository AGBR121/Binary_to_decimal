import './App.css'
import Home from './components/home.jsx';
import DecimalBinario from './components/decimalbinario.jsx';
import BinarioDecimal from './components/binariodecimal.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/binario-decimal" element={<BinarioDecimal/>} />
        <Route path="/decimal-binario" element={<DecimalBinario/>} />
        <Route path="*" element={<notFound/>} />
      </Routes>
    </Router>
  )
}

export default App
