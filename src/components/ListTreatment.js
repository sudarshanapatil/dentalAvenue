
import { Button, Table, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
function ListTreatment(){
  let treatments=[{
    main:'X-Ray',
    sub:'',
    cost:2000
  },
  {
    main:'X-Ray',
    sub:'j',
    cost:2000
  },
  {
    main:'X-Ray',
    sub:'',
    cost:2000
  }]
return(<Table responsive>
  <thead>
    <tr>
      <th>Date</th>
      <th>Treatment Name</th>
      <th>Total Amount</th>
      <th>Amount Paid</th>
      <th>Balance Amount</th>
    </tr>
  </thead>
  <tbody>
    {treatments.map(treatment => (
      <tr>
        <td>{treatment.main}</td>
        <td>{treatment.name}</td>
        <td>{treatment.cost}</td>
        <td>{treatment.paid}</td>
        <td>{treatment.balance}</td>
      </tr>
    ))}
  </tbody>
</Table>)

}
export default ListTreatment