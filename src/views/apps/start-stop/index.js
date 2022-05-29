import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import { Fragment, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button, ModalBody } from 'reactstrap'
import {Modal } from 'react-bootstrap'
import { X, Calendar, AlertCircle, CheckCircle } from 'react-feather'
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
      <Row style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Col md='4' lg='4'>
          <Card className='text-center' style={{background:'rgba(59, 193, 113, 0.15)'}}>
            <CardHeader> <Calendar />
        <CardTitle tag='h4'>Start Now</CardTitle></CardHeader>
            <CardFooter>
              <CardTitle><h1>09-05-2022</h1></CardTitle>
              <CardText>12:00(pm)</CardText>
            </CardFooter>
            <CardFooter className='text-muted'>
            <Button.Ripple color="success" onClick={handleShowtow}>
            Start Now
      </Button.Ripple>
</CardFooter>
          </Card>
        </Col>
        <Col md='4' lg='4'>
          <Card className='text-center' style={{background:'rgba(255, 100, 124, 0.15)'}}>
          <CardHeader> <Calendar />
        <CardTitle tag='h4'>End Now</CardTitle></CardHeader>
            <CardFooter>
              <CardTitle><h1>25-05-2022</h1></CardTitle>
              <CardText>12:00(pm)</CardText>
            </CardFooter>
            <CardFooter className='text-muted'>
              <Button.Ripple color='danger' onClick={endModal}>
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
          <Modal.Title>Start Now</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleCloset}/>
        </Modal.Header>
        <ModalBody>
         <CheckCircle size={85} style={{display:'block', margin:'auto', color:"green"}} />
         <h2 style={{textAlign:'center'}}>Are You Sure</h2>
         <div style={{textAlign:'center'}}>You won't be able to revert this!</div>
         </ModalBody>
        <Modal.Footer>
        <Button color="primary"  onClick={handleCloset}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={endmodal}>
        <Modal.Header >
          <Modal.Title>End Now</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleClose}/>
        </Modal.Header>
        <ModalBody>
         <AlertCircle size={85} style={{display:'block', margin:'auto', color:"red"}} />
         <h2 style={{textAlign:'center'}}>Are You Sure</h2>
         <div style={{textAlign:'center'}}>You won't be able to revert this!</div>
         </ModalBody>
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
