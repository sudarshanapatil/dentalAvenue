// import { Button, Table, Row, Col } from 'react-bootstrap'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

import cellEditFactory from 'react-bootstrap-table2-editor'
const ListDoctor = props => {
  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Name'
      // sort: true
    },
    {
      dataField: 'qualification',
      text: 'Qualiication'
    },
    {
      dataField: 'type',
      text: 'Type'
    }
  ]
  const data = props.doctorsList
  const rowClasses = 'background-color: teal;';
  return (
    <BootstrapTable
      // striped
      keyField='id'
      data={data}
      columns={columns}
      rowClasses={ rowClasses }
      cellEdit={cellEditFactory({ mode: 'click' })}
    />
  )
}
export default ListDoctor
