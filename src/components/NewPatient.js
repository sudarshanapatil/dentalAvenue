import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Add () {
  // Declare a new state variable, which we'll call "count"
  console.log('added')
  //const [count, setCount] = useState(0);
  return (
    <div className='addPatientContainer'>
      <div className='newPatientForm'>
        <div>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
        </div>
        <label>
          address:
          <input type='text' name='address' />
        </label>
        <label>
          age:
          <input type='text' name='age' />
        </label>
        <label>
          sex:
          <input type='text' name='sex' />
        </label>
        <label>
          occupation:
          <input type='text' name='occupation' />
        </label>
        <label>
          Mobile Number:
          <input type='text' name='mobileNumber' />
        </label>
        <label>
          Email:
          <input type='text' name='email' />
        </label>
      </div>
    </div>
  )
}
export default Add
