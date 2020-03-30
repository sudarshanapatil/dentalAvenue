import { Table } from "react-bootstrap";
import React from "react";
const ListPatient = props => {
  let treatments = props.patientsData

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
        {treatments.map((treatment,index) => (
          <tr key={index}>
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
