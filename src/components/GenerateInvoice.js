import { Row, Col, Container, Table,FormControl,InputGroup } from 'react-bootstrap'

// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import '../styles/CurrentUser.css'
import '../styles/GenerateInvoice.css'


function GenerateInvoice(props) {
    console.log(props, "datain")
    return (
        <Container fluid>
            {/* <Navbar /> */}
            <Row className='clinicNameInvoice'>
                Patil`s Dental Avenue
            </Row>
            <Row>
                <Col>
                    Sudarshana Patil
                <br />
                    Mangalgani C.H.S,
                <br />
                    Sector-53,New Panvel
                <br />
                    9878676767
                </Col>
                <Col>
                    Invoice Number : 121
                <br />
                    Date : 12/02/2020
                </Col>
            </Row>
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
                            {/* <td>
                                <DatePicker showTimeSelect
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    timeClassName={this.handleColor}
                                />
                            </td> */}
                            <td><InputGroup className="mb-3">
                                <FormControl as="select" >
                                    {/* {
                                        this.state.treatments.map((key, index) => <option key={index}>{key.name}</option>)
                                    } */}
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
                        {(props.invoiceData.length !== 0) && props.invoiceData.map((treatment, index) => (
                            <tr key={index}>
                                {/* <td>
                                    <DatePicker showTimeSelect
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        timeClassName={this.handleColor}
                                    />
                                </td> */}
                                <td>{treatment.main}</td>
                                <td>{treatment.cost}</td>
                                <td>{treatment.paid}</td>
                                <td>{treatment.balance}</td>
                                <td><input type="file" name="file" /></td>
                            </tr>
                        ))}

                        {(props.invoiceData.length === 0) && <tr><td>NO previous treatment</td></tr>}
                    </tbody>
                </Table>
            </Row>


            <Row>
                Neel Siddhi,202,Sector-24,Mumbai<br />
                mail@dummyClinic.com website:www.clinic.com
          </Row>
        </Container>
    )
}
export default GenerateInvoice
