import { ReactP5Wrapper } from '@p5-wrapper/react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function dataSketch(p5) {
  let babyNames = []
  
  // This function will be called when props change
  p5.updateWithProps = props => {
    if (props.babyNames) {
      babyNames = props.babyNames
    }
  }

  p5.setup = () => {
    p5.createCanvas(800, 600)
    p5.textAlign(p5.LEFT, p5.CENTER)
  }

  p5.draw = () => {
    p5.background(240, 248, 255)
    
    // Title
    p5.fill(50)
    p5.textSize(24)
    p5.text('NYC Popular Baby Names 2023', 20, 30)
    
    if (babyNames.length === 0) {
      p5.textSize(16)
      p5.text('Loading data from NYC Open Data...', 20, 100)
      return
    }
    
    // Draw bars for each name
    let yPos = 80
    let maxCount = Math.max(...babyNames.map(name => parseInt(name.count)))
    
    babyNames.forEach((name, index) => {
      let count = parseInt(name.count)
      let barWidth = p5.map(count, 0, maxCount, 0, 600)
      
      // Color based on gender
      if (name.gender === 'FEMALE') {
        p5.fill(255, 100, 150)
      } else {
        p5.fill(100, 150, 255)
      }
      
      // Draw bar
      p5.rect(150, yPos, barWidth, 25)
      
      // Draw name and count
      p5.fill(50)
      p5.textSize(14)
      p5.text(name.childs_first_name, 20, yPos + 12)
      p5.text(count, 760, yPos + 12)
      
      yPos += 35
    })
    
    // Legend
    p5.fill(255, 100, 150)
    p5.rect(20, p5.height - 50, 20, 20)
    p5.fill(50)
    p5.textSize(14)
    p5.text('Female', 50, p5.height - 40)
    
    p5.fill(100, 150, 255)
    p5.rect(150, p5.height - 50, 20, 20)
    p5.fill(50)
    p5.text('Male', 180, p5.height - 40)
  }
}

function DataSketch() {
  const [babyNames, setBabyNames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from NYC Open Data API
    // This gets the top 10 most popular baby names from 2023
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://data.cityofnewyork.us/resource/25th-nujf.json?year_of_birth=2023&$order=count DESC&$limit=10'
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        
        const data = await response.json()
        setBabyNames(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, []) // Empty dependency array means this runs once when component mounts

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Link to="/" style={{ color: '#0066cc', marginBottom: '10px', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      <h1>NYC Open Data + P5</h1>
      <p>
        This sketch fetches real data from the{' '}
        <a 
          href="https://data.cityofnewyork.us/Health/Popular-Baby-Names/25th-nujf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0066cc' }}
        >
          NYC Popular Baby Names
        </a>
        {' '}dataset and visualizes it.
      </p>
      
      {error && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#ffdddd', 
          borderRadius: '4px',
          marginTop: '10px'
        }}>
          Error: {error}
        </div>
      )}
      
      <div style={{ marginTop: '20px' }}>
        <ReactP5Wrapper sketch={dataSketch} babyNames={babyNames} />
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px',
        maxWidth: '800px'
      }}>
        <h3>How This Works:</h3>
        <ol>
          <li>
            <strong>React fetches the data</strong> using <code>fetch()</code> in a <code>useEffect</code> hook
          </li>
          <li>
            <strong>Data is stored in state</strong> using <code>useState</code>
          </li>
          <li>
            <strong>Data is passed to p5</strong> as a prop: <code>&lt;ReactP5Wrapper sketch={'{dataSketch}'} babyNames={'{babyNames}'} /&gt;</code>
          </li>
          <li>
            <strong>P5 receives the data</strong> through the <code>updateWithProps</code> function
          </li>
          <li>
            <strong>P5 draws the visualization</strong> in the <code>draw()</code> loop
          </li>
        </ol>
        
        <h4>API Details:</h4>
        <p>
          <strong>Endpoint:</strong> <code style={{ fontSize: '12px' }}>
            https://data.cityofnewyork.us/resource/25th-nujf.json
          </code>
        </p>
        <p>
          <strong>Query:</strong> Get top 10 names from 2023, sorted by count
        </p>
        <p>
          <strong>No API key required</strong> for basic usage (limited to 1000 requests/day)
        </p>
      </div>
    </div>
  )
}

export default DataSketch
