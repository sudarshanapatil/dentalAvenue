import { Button, Table, Row, Col } from "react-bootstrap";
import React from "react";

const ListDoctor = props => {
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
          <th>Id</th>
          <th> Name</th>
          <th>Qualification</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {props.doctorsList.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.qualification}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ListDoctor;
