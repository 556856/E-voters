import StartDateTime from './StartDateTime'
import EndDateTime from './EndDateTime'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useState } from 'react'
import Popup from './Popup'
const MultipleColumnForm = () => {
  const [statusValue, setStatusValue] = useState('')
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Election Name</Label>
                <Input type='text' name='name' id='nameMulti' placeholder='Election Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Election Logo</Label>
                <Input type='file' name='lastname' id='lastNameMulti' placeholder='Last Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
            <StartDateTime/>
            </Col>
            <Col md='6' sm='12'>
              <EndDateTime/>
            </Col>
            <Col md='6' sm='12'>
            <FormGroup>
                <Label for='lastNameMulti'>Timezone</Label>
                <Input  type='select'>
            <option value=''>(GMT) +05:30 Asia/Kolkata</option>
            <option  disabled>Asia</option>
            <option value=''>(GMT) +05:30 Asia/Wuhan</option>
            <option value=''>(GMT) +05:30 Asia/Karachi</option>
            <option value=''>(GMT) +05:30 Asia/Cylone</option>
            <option value=''>(GMT) +05:30 Asia/Tokyo</option>
            <option value=''>(GMT) +05:30 Asia/Korea</option>
          </Input>
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
              <Popup/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
