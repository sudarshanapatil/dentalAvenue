import { Button, Table, Row, Container, FormControl, InputGroup } from 'react-bootstrap'
import React from 'react'
// import AddEditDeleteMenu from './AddEditDeleteMenu'
import CurrentUser from './CurrentUser'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class ListPaientsTreatment extends React.Component {
  constructor(props) {
    super(props)
    let patientId = this.props.patientId;
    console.log(patientId, "patientId", props)
    this.state = {
      startDate: new Date(),
      patientsTreatments: [],
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
        this.setState({ patientsTreatments: result })
      })
      .catch(err => console.log(err))
    fetch('http://www.mocky.io/v2/5e819608300000bb386f9853')
      .then(res => res.json())
      .then(result => {
        this.setState({ treatments: result })
      })
      .catch(err => console.log(err))

  }
  render() {
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
              <tr>
                <td>
                  <DatePicker showTimeSelect
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    timeClassName={this.handleColor}
                  />
                </td>
                <td><InputGroup className="mb-3">
                  <FormControl as="select" >
                    {
                      this.state.treatments.map((key, index) => <option key={index}>{key.name}</option>)
                    }
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
              </tr>
              {(this.state.patientsTreatments.length !== 0) && this.state.patientsTreatments.map((treatment, index) => (
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

              {(this.state.patientsTreatments.length === 0) && <tr><td>NO previous treatment</td></tr>}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Button >
            Save Details
          </Button>
          <Button onClick={()=>this.props.sendInvoiceData(this.state.patientsTreatments)}>
            Generate Invoice
          </Button>
        </Row>
      </Container>
    )
  }
}
export default ListPaientsTreatment
