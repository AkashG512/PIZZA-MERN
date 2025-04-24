import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  )
}

export default App