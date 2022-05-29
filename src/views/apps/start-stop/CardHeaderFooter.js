import { Fragment, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button } from 'reactstrap'
import {Modal } from 'react-bootstrap'
import { X } from 'react-feather'
import GoalOverview from './GoalOverview'
const CardHeaderFooter = () => {
  const [showsecound, setShowsecound] = useState(false) 
  //end state
  const [endmodal, setEndmodal] = useState(false)
  const handleCloset = () => setShowsecound(false)
  const handleShowtow = () => {
    setShowsecound(true)
  } 
  const endModal = () => setEndmodal(true)
  const handleClose = () => setEndmodal(false)
  const [OTP, setOTP] = useState("")
  return (
    <Fragment>
      <h6 className='text-muted my-2'>Header and footer</h6>
      <Row style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Col md='6' lg='4'>
          <Card className='text-center'>
            <CardHeader>Start Datdde</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>09-05-2022</CardTitle>
              <CardText>12:00 am</CardText>
              <CardTitle tag='h4'>Start Now</CardTitle>
            </CardBody>
            <CardFooter className='text-muted'>
            <Button.Ripple color="primary" onClick={handleShowtow}>
        Submit with OTP
      </Button.Ripple>
</CardFooter>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card className='text-center'>
            <CardHeader>xEnd Date</CardHeader>
            <CardBody>
              <CardTitle tag='h4'>25-05-2022</CardTitle>
              <CardText>6:00 pm</CardText>
              <CardTitle tag='h4'>End Now</CardTitle>
            </CardBody>
            <CardFooter className='text-muted'>
              <Button.Ripple color='primary' onClick={endModal}>
            End With OTP
              </Button.Ripple></CardFooter>
          </Card>
        </Col>
        <Col md='4'>
        <GoalOverview/>
        </Col>
      </Row>
      <Modal show={showsecound}>
        <Modal.Header >
          <Modal.Title>OTP Verification(Start Now)</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleCloset}/>
        </Modal.Header>
        <Modal.Body>
          sssssssssssssssssssss
        </Modal.Body>
        <Modal.Footer>
        <Button color="primary"  onClick={handleCloset}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={endmodal}>
        <Modal.Header >
          <Modal.Title>OTP Verification(End Now)</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          thfgbfgdxfgsergsrhrewat
        </Modal.Body>
        <Modal.Footer>
        <Button color="primary"  onClick={handleClose}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default CardHeaderFooter
