import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ 
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>P5.js + React Demo</h1>
      <p>This app demonstrates how to use multiple p5 sketches in a React app with routing.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Examples:</h2>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>
            <Link to="/basic" style={{ color: '#0066cc' }}>
              Basic Sketch
            </Link>
            {' '}- A simple animated p5 sketch
          </li>
          <li>
            <Link to="/data" style={{ color: '#0066cc' }}>
              NYC Data Visualization
            </Link>
            {' '}- Fetches and displays Popular Baby Names data
          </li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px' 
      }}>
        <h3>For Students:</h3>
        <p>
          You can add as many pages/sketches as you want! Just:
        </p>
        <ol>
          <li>Create a new file in <code>src/pages/</code></li>
          <li>Import it in <code>App.jsx</code></li>
          <li>Add a new <code>&lt;Route&gt;</code> in <code>App.jsx</code></li>
          <li>Link to it from any page</li>
        </ol>
      </div>
    </div>
  )
}

export default Home
