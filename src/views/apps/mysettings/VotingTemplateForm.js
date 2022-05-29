import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, Alert } from 'reactstrap'
import EmailPopup from './EmailPopup'
import EmailPreviewPopup from './EmailPreviewPopup'
const MultipleColumnForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Voting OTP Template</CardTitle>
      </CardHeader>
      <div style={{margin:'0px 30px'}}>
      <Alert color='primary'>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      </div>
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>From Name</Label>
                <Input type='text' name='name' id='nameMulti' placeholder='From Name' />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Subject</Label>
                <Input type='text' name='lastname' id='lastNameMulti' placeholder='Are you invited to vote in election' />
              </FormGroup>
            </Col>
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Body</Label>
                <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Hi %name% please vote in this election' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
              <EmailPopup/>
              <EmailPreviewPopup/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
