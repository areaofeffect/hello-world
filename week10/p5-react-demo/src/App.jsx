import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BasicSketch from './pages/BasicSketch'
import DataSketch from './pages/DataSketch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicSketch />} />
        <Route path="/data" element={<DataSketch />} />
      </Routes>
    </Router>
  )
}

export default App
