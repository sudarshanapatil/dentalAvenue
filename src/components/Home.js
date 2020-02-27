import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Home () {
  // Declare a new state variable, which we'll call "count"
  const [count, showPage] = useState(0)
  console.log(count, 'count')
  return (
    <div className='homeContainer'>
      <div className='navbar'>Welcome to Patils Dental Avenue</div>
      <div className='homeLayoutContainer'>
        <div className='homeButtonh'>
          <Link to='/NewPatient'>ExistingPatient</Link>
          <Link to='/ExistingPatient'>ExistingPatient</Link>
        </div>
      </div>
    </div>
  )
}
export default Home
