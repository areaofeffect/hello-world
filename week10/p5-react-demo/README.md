# P5.js + React Multi-Page Demo

A simple React app demonstrating:
1. Multiple pages with different p5.js sketches
2. Fetching data from NYC Open Data API and visualizing it in p5

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`)

## Project Structure

```
src/
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── pages/
    ├── Home.jsx         # Landing page with navigation
    ├── BasicSketch.jsx  # Simple p5 sketch example
    └── DataSketch.jsx   # NYC Open Data visualization
```

## What Each Page Does

### Home (`/`)
- Simple landing page with links to the sketches
- Shows how to use React Router for navigation

### Basic Sketch (`/basic`)
- A simple animated p5 sketch
- Demonstrates basic p5 setup and draw functions
- Shows how to use mouseX and mouseY

### Data Sketch (`/data`)
- Fetches NYC Popular Baby Names data
- Visualizes the data using p5
- Shows how to:
  - Use `fetch()` to get data from an API
  - Use `useState` and `useEffect` in React
  - Pass data to your p5 sketch as props

## NYC Open Data API

This demo uses the **Popular Baby Names** dataset:
- **Dataset**: https://data.cityofnewyork.us/Health/Popular-Baby-Names/25th-nujf
- **API Endpoint**: `https://data.cityofnewyork.us/resource/25th-nujf.json`
- **No API key required** for basic queries (limited to 1000 requests/day)

### Example Query Parameters
```
?year_of_birth=2023          # Filter by year
?$limit=20                   # Limit results
?gender=FEMALE               # Filter by gender
?$order=count DESC           # Sort by count
```

## Tips for Students

1. **Adding more sketches**: Copy `BasicSketch.jsx`, rename it, and add a route in `App.jsx`

2. **The p5 prefix**: In `@p5-wrapper/react`, you need to use `p5.function()` for all p5 functions. For example:
   - `p5.createCanvas()` instead of `createCanvas()`
   - `p5.background()` instead of `background()`
   - `p5.ellipse()` instead of `ellipse()`

3. **Common p5 properties** like `p5.mouseX` and `p5.mouseY` work the same way

4. **Updating sketches with new data**: Use the `updateWithProps()` function in your sketch to receive new props from React

## Finding More NYC Open Data

1. Visit https://opendata.cityofnewyork.us/
2. Search for a dataset
3. Click on it and go to the "API" tab
4. Copy the API endpoint (ends in `.json`)
5. Use `fetch()` to get the data in your React component

## Common Issues

**Issue**: Sketch not rendering
- Check browser console for errors
- Make sure all p5 functions are prefixed with `p5.`

**Issue**: Data not loading
- Check browser console Network tab
- Verify the API endpoint is correct
- Check if you're hitting rate limits (refresh after a minute)

**Issue**: Can't see changes
- Make sure dev server is running (`npm run dev`)
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder you can deploy to any static hosting service.
