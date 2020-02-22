import React, { useState } from 'react'
import Add from './NewPatient'

function Example () {
  // Declare a new state variable, which we'll call "count"
  const [count, showPage] = useState(0)
  console.log(count, 'count')
  return (
    <div className='homeContainer'>
      {/* {count ? <Add /> : <div></div>} */}
      <div className='navbar'>Welcome to Patils Dental Avenue</div>
      <div className='homeLayoutContainer'>

      <div className='homeButtonh'>
        <button className='buttonStyle' onClick={() => showPage(1)}>Existing Patient</button>

        <button className='buttonStyle' onClick={() => showPage(1)}>New Patient</button>
      </div>
      </div>
    </div>
  )
}
export default Example
