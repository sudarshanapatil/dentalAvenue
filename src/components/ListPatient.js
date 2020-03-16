import { Button, Table, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
function ListPatient() {
  let treatments = [
    {
      name: "Nishigandha Waad",
      age: 23,
      address: "Panvel",
      sex: "M"
    },
    {
      name: "Alaka Kubal",
      age: 23,
      address: "Rasayani",
      sex: "M"
    },
    {
      name: "Nishigandha Waad",
      age: 23,
      address: "Panvel",
      sex: "M"
    }
  ];
  return (
    <Table
      striped
      bordered
      hover
      responsive
      // size="xs"
      className="list-table"
      variant="dark"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Sex</th>
        </tr>
      </thead>
      <tbody>
        {treatments.map(treatment => (
          <tr>
            <td>{treatment.name}</td>
            <td>{treatment.age}</td>
            <td>{treatment.address}</td>
            <td>{treatment.sex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ListPatient;
