import { Button, Table, Row, Col, Container, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import React, { useState, Component } from 'react'
import AddEditDeleteMenu from './AddEditDeleteMenu'
import CurrentUser from './CurrentUser'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from '@testing-library/react'

class ListPaientsTreatment extends Component {
  constructor(props) {
    super(props)
    let patientId = this.props.patientId;
    console.log(patientId, "patientId")
    this.state = {
      startDate: new Date(),
      treatments: []
    }
  }
  handleChange = date => {
    console.log(this.state.startDate, 'date', date)
    this.setState({ startDate: date })
  }
  handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5e818aac30000049006f9802')
      .then(res => res.json())
      .then(result => {
        console.log(result, "API treatment")
        this.setState({ treatments: [] })
      })
      .catch(err => console.log(err))

  }
  render() {
    // console.log(this.
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
              <td>
                <DatePicker showTimeSelect
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  timeClassName={this.handleColor}
                />
              </td>
              <td><InputGroup className="mb-3">
                <FormControl as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </FormControl>
                <FormControl aria-describedby="basic-addon1" />
              </InputGroup></td>
              <td><FormControl
                placeholder="aad amount"
                aria-label="Username"
                aria-describedby="basic-addon1" />
              </td>
              <td><FormControl
                placeholder="aad amount"
                aria-label="Username"
                aria-describedby="basic-addon1" />
              </td>
              <td><FormControl
                placeholder="aad amount"
                aria-label="Username"
                aria-describedby="basic-addon1" />
              </td>
              <td><input type="file" name="file" /></td>
              {(this.state.treatments.length != 0) && this.state.treatments.map((treatment, index) => (
                <tr key={index}>
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

              {<tr>NO previous treatment</tr>}
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
