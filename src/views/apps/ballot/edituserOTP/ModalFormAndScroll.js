import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  Form,
  FormGroup
} from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Edit, X } from 'react-feather'
import {Modal, Button } from 'react-bootstrap'
import OTPInput, { ResendOTP } from "otp-input-react"
const colorOptions = [
  { value: 'President', label: 'President', color: '#00B8D9', isFixed: true },
  { value: 'Vice President', label: 'Vice President', color: '#0052CC', isFixed: true },
  { value: 'Organizing committee', label: 'Organizing committee', color: '#5243AA', isFixed: true }
]

const ModalForm = () => {
  const [showfirst, setShoww] = useState(false)
  const [showsecound, setShowsecound] = useState(false) 
  const handleClose = () => setShoww(false)
  const handleShoww = () => setShoww(true)
  const handleShowtow = () => {
    setShowsecound(true)
    setShoww(false)
  }   
  const handleCloset = () => setShowsecound(false)
  const [OTP, setOTP] = useState("")
  return (
    <div className='demo-inline-spacing'>
      <div>
      <Edit style={{cursor: 'pointer'}} onClick={handleShoww} size={15} />
      <Modal show={showfirst}>
        <Modal.Header>
          <Modal.Title>Edit Ballot</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <FormGroup row>
            <Label sm='3' for='Election'>
            Full Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='Full Name' id='Full Name' placeholder='Full Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Email
            </Label>
            <Col sm='9'>
              <Input type='mail' name='Email' id='Email' placeholder='Email' />
            </Col>
          </FormGroup>
          <FormGroup row>
          <Label sm='3' for='name'>
      Election Catogery
            </Label>
            <Col className='mb-1' md='6' sm='12'>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
            </FormGroup>
          <FormGroup row>
            <Col sm='12'>
            <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Bio'/>
            </Col>
          </FormGroup>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleShowtow}>
        Submit with OTP
      </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showsecound}>
        <Modal.Header >
          <Modal.Title>OTP Verification</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleCloset}/>
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
        <Button variant="primary"  onClick={handleCloset}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}
export default ModalForm
