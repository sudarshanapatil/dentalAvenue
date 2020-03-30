import {  Table } from "react-bootstrap";
import React from "react";

const ListTreatment = props => {
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
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {props.treatmentsList.map((treatment, index) => (
          <tr key={index}>
            <td>{treatment.name}</td>
            <td>{treatment.cost}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ListTreatment;
