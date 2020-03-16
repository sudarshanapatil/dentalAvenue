import { Button, Table, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import CurrentUser from "./CurrentUser";
function ListTreatment() {
  let treatments = [
    {
      name: "OPD",
      cost: 2000
    },
    {
      name: "X-Ray",
      cost: 2000
    },
    {
      name: "Scaling/Cleaning",
      cost: 2000
    },
    {
      name: "Filling",
      cost: 2000
    },
    {
      name: "Root canel treatment",
      cost: 2000
    },
    {
      name: "Post and core",
      cost: 2000
    },
    {
      name: "Extraction",
      cost: 2000
    },
    {
      name: "Bridge",
      cost: 2000
    },
    {
      name: "Crown",
      cost: 2000
    },
    {
      name: "Implant",
      cost: 2000
    },
    {
      name: "Removable partial denture",
      cost: 2000
    },
    {
      name: "Complete Denture",
      cost: 2000
    },
    {
      name: "Perio surgery",
      cost: 2000
    },
    {
      name: "Space maintainer",
      cost: 2000
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
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {treatments.map(treatment => (
          <tr>
            <td>{treatment.name}</td>
            <td>{treatment.cost}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ListTreatment;
