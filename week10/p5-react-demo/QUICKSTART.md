# Quick Start Guide

## What You Have

A complete React + p5.js demo app with:

✅ Multiple pages using React Router
✅ Basic p5 sketch example (bouncing ball + mouse follow)
✅ NYC Open Data integration (Popular Baby Names visualization)
✅ Comprehensive README with step-by-step instructions

## Get Started in 3 Steps

1. **Navigate to the project folder:**
   ```bash
   cd p5-react-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

Then open your browser to the URL shown (usually http://localhost:5173)

## File Structure

```
p5-react-demo/
├── README.md              ← Full documentation (read this!)
├── package.json           ← Dependencies
├── vite.config.js         ← Vite configuration
├── index.html             ← HTML entry point
└── src/
    ├── main.jsx           ← React entry point
    ├── App.jsx            ← Routes defined here
    └── pages/
        ├── Home.jsx       ← Landing page (/)
        ├── BasicSketch.jsx ← Simple sketch (/basic)
        └── DataSketch.jsx  ← NYC Data (/data)
```

## For Your Students

The README.md has all the details they need, including:
- How the p5 prefix works
- How to add more pages/sketches
- How to find and use other NYC Open Data APIs
- Common troubleshooting tips

## NYC Open Data Example

The app uses the **Popular Baby Names** dataset because:
- ✅ No API key needed for basic queries
- ✅ Simple, relatable data
- ✅ Easy to visualize
- ✅ Shows both data fetching AND p5 visualization

Students can explore 2,000+ other datasets at https://opendata.cityofnewyork.us/

## Need More Pages?

Just duplicate one of the page files and:
1. Update the sketch code
2. Import it in `App.jsx`
3. Add a `<Route>` in `App.jsx`
4. Link to it from any page

That's it! 🎨
