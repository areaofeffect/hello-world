import { ReactP5Wrapper } from '@p5-wrapper/react'
import { Link } from 'react-router-dom'

function sketch(p5) {
  let x = 100
  let y = 100
  let xSpeed = 3
  let ySpeed = 2

  p5.setup = () => {
    p5.createCanvas(600, 400)
  }

  p5.draw = () => {
    p5.background(30, 30, 50)
    
    // Draw a bouncing ball
    p5.fill(100, 200, 255)
    p5.noStroke()
    p5.ellipse(x, y, 50, 50)
    
    // Move the ball
    x += xSpeed
    y += ySpeed
    
    // Bounce off edges
    if (x > p5.width - 25 || x < 25) {
      xSpeed *= -1
    }
    if (y > p5.height - 25 || y < 25) {
      ySpeed *= -1
    }
    
    // Draw a circle that follows the mouse
    p5.fill(255, 100, 150, 150)
    p5.ellipse(p5.mouseX, p5.mouseY, 30, 30)
    
    // Draw some text
    p5.fill(255)
    p5.textSize(16)
    p5.text('Move your mouse around!', 10, 20)
  }
}

function BasicSketch() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Link to="/" style={{ color: '#0066cc', marginBottom: '10px', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      <h1>Basic P5 Sketch</h1>
      <p>A simple bouncing ball animation. Move your mouse to see the second circle follow you!</p>
      
      <div style={{ marginTop: '20px' }}>
        <ReactP5Wrapper sketch={sketch} />
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px',
        maxWidth: '600px'
      }}>
        <h3>Note for Students:</h3>
        <p>
          Notice how all p5 functions are prefixed with <code>p5.</code> - 
          like <code>p5.createCanvas()</code>, <code>p5.ellipse()</code>, etc.
        </p>
        <p>
          This is required when using <code>@p5-wrapper/react</code>!
        </p>
      </div>
    </div>
  )
}

export default BasicSketch
