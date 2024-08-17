import './App.css'
import Home from './components/home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/binario-decimal" element={<a />} />
        <Route path="/decimal-binario" element={<b />} />
        <Route path="*" element={<notFound/>} />
      </Routes>
    </Router>
  )
}

export default App
