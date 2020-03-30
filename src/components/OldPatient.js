import React from 'react'
import { Table } from 'react-bootstrap'
function OldPatient () {
  let previousTreatment = [
    {
      date: '20/02/2020',
      name: 'Cementation',
      total: 400,
      paid: 200,
      balance: 200,
      drName:'Dr. Prashant Patil'
    },
    {
      date: '20/02/2020',
      name: 'Cementation',
      total: 400,
      paid: 200,
      balance: 200,
      drName:'Dr. Neha Patil'
    }
  ]
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Treatment Name</th>
          <th>Total Amount</th>
          <th>Amount Paid</th>
          <th>Balance Amount</th>
          <th>Treatment Done By Doctor</th>
        </tr>
      </thead>
      <tbody>
        {previousTreatment.map(treatment => (
          <tr>
            <td>{treatment.date}</td>
            <td>{treatment.name}</td>
            <td>{treatment.total}</td>
            <td>{treatment.paid}</td>
            <td>{treatment.balance}</td>
            <td>{treatment.drName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default OldPatient
