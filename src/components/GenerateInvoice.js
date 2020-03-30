import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import '../styles/CurrentUser.css'
import '../styles/GenerateInvoice.css'
import Navbar from './Navbar'

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
                Neel Siddhi,202,Sector-24,Mumbai<br />
                mail@dummyClinic.com website:www.clinic.com
    </Row>
        </Container>
    )
}
export default GenerateInvoice
