import { Button, Table, Row, Col, Image } from 'react-bootstrap'
import React, { useState } from 'react'
function CurrentUser () {
  return (
    <Row className='currentUserContainer'>
      <Col xs={3}>
        <div className='Row'>Sudarshana Patil</div>
        <div className='Row'>23</div>
      </Col>

      <Col xs={9}>
        <Image
          src={require('./images/logo.png')}
          style={{ width: 100, height: 100 }}
        />
      </Col>
    </Row>
  )
}
export default CurrentUser
