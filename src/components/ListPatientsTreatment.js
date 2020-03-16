import { Button, Table, Row, Col, Container } from 'react-bootstrap'
import React, { useState, Component } from 'react'
import AddEditDeleteMenu from './AddEditDeleteMenu'
import CurrentUser from './CurrentUser'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from '@testing-library/react'

class ListPaientsTreatment extends Component {
  constructor () {
    super()
    this.state = {
      startDate: new Date()
    }
  }
  handleChange = date => {
    console.log(this.state.startDate, 'date', date)
    this.setState({ startDate: date })
  }
  handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  render () {
    // console.log(this.state.startDate, 'date')
    let treatments = [
      {
        main: 'X-Ray',
        sub: '',
        cost: 2000
      },
      {
        main: 'X-Ray',
        sub: 'j',
        cost: 2000
      },
      {
        main: 'X-Ray',
        sub: '',
        cost: 2000
      }
    ]
    return (
      <Container fluid>
        <CurrentUser />
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Treatment Name</th>
                <th>Total Amount</th>
                <th>Amount Paid</th>
                <th>Balance Amount</th>
                <th>Upload X-ray</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map(treatment => (
                <tr>
                  <td>
                    <DatePicker showTimeSelect
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      timeClassName={this.handleColor}
                    />
                  </td>
                  <td>{treatment.main}</td>
                  <td>{treatment.cost}</td>
                  <td>{treatment.paid}</td>
                  <td>{treatment.balance}</td>
                  <td><input type="file" name="file" /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Button>
            Save Details
          </Button>
          <Button>
            Generate Invoice
          </Button>
        </Row>
      </Container>
    )
  }
}
export default ListPaientsTreatment
