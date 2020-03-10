
import { Button, Table, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
function ListDoctor(){
  let list=[{
    id:1,
    name:'Dr. Prashant Patil',
    type:'Regular',
    qualification:'Implantologist'
  },
  {
    id:2,
    name:'Dr. Neha Patil',
    type:'Regular',
    qualification:'Pedodontist'
  },
  {
    id:3,
    name:'Dr. Mahesh Patil',
    type:'Visting',
    qualification:'Prostodontist'
  },
  {
    id:3,
    name:'Dr. Jitendra Patil',
    type:'Visting',
    qualification:'Pedodontist'
  },
  {
    id:3,
    name:'Dr. Varsha Patil',
    type:'Visting',
    qualification:'Pedodontist'
  }
]
return(<Table striped bordered hover responsive size='lg' >
  <thead>
    <tr>
      <th>Id</th>
      <th> Name</th>
      <th>Qualification</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {list.map(item => (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.qualification}</td>
        <td>{item.type}</td>
        
      </tr>
    ))}
  </tbody>
</Table>)

}
export default ListDoctor