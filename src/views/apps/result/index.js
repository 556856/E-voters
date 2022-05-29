import { Fragment, useState } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, Button } from 'reactstrap'
import TableWithButtons from './TableWithButtons'
import { X } from 'react-feather'
import {Modal } from 'react-bootstrap'
import OTPInput, { ResendOTP } from "otp-input-react"
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
const EcommerceDashboard = () => {
const [show, setShow] = useState(false)
const [opentable, setOpentable] = useState(false)
const [showcard, setShowcard] = useState(true)
const shoemodalHandler = () => setShow(true)
const closeHandeler = () => {
 setShow(false)
 }
const [OTP, setOTP] = useState("")
  return (
    <div id='dashboard-ecommerce'>

      {showcard ? <Fragment show = {showcard}>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle className='mb-75' tag='h3'>
          Results
          </CardTitle>
        </CardHeader>
        <Row style={{disaply:'flex', flexDirection:'column', gap:'40px', marginTop:'30px',  marginBottom:'30px'}}>
        <h1 style={{textAlign:'center'}}>To See result please Click the Button Below</h1>
        <Button.Ripple style={{margin:'auto', disaply:'block'}} color='primary' onClick = {shoemodalHandler}>View Results with OTP</Button.Ripple> 
        </Row>
      </Card>
    </Fragment> : null }
       
    { opentable ?  <TableWithButtons/> : null }

 <Modal show={show}>
        <Modal.Header >
          <Modal.Title>OTP Verification(Start Now)</Modal.Title>
          <X style={{cursor: 'pointer'}} onClick = {closeHandeler}/>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md='12' style={{display:'flex', flexDirection:'column',   gap: '5px', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <p>Enter the code we just send on your mobile phone ********833</p>
              <OTPInput inputStyles={{}} value='kkkk' onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure/>
              <div style={{justifyContent: 'space-between'}}> <p>Don't receive the code?</p>
      <ResendOTP  style={{color:'blue'}} onResendClick={() => console.log("Resend clicked")} /></div>
           </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button color="primary" onClick = { () => {
           setOpentable(true) 
           setShow(false)
           setShowcard(false)
           } }>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EcommerceDashboard
