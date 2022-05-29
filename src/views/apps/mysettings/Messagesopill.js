import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Row, Col } from 'reactstrap'
import MessagePopup from './MessagePopup'
const Messagesopill = () => {
    return (
        <>
        <Card>
      <CardHeader>
        <CardTitle tag='h4'>Voting Guidelines</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
         This are the guide line displayed in the <code>front end</code> which are view by the users
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
      </CardBody>
      <hr></hr>
      <CardHeader>
        <CardTitle tag='h4'>Login Instructions</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
         This are the guide line displayed in the <code>front end</code> which are view by the users
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
      </CardBody>
      <hr></hr>
      <CardHeader>
        <CardTitle tag='h4'>Vote Confermation Message </CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
         This are the guide line displayed in the <code>front end</code> which are view by the users
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
      </CardBody>
      <hr></hr>
      <CardHeader>
        <CardTitle tag='h4'>Close Election Message </CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
         This are the guide line displayed in the <code>front end</code> which are view by the users
        </CardText>
        <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
      </CardBody>
      <Row>
          <Col md='3' style={{marginBottom:'10px'}}>
          <MessagePopup/>
          </Col>
      </Row>
    
    </Card>
    </>
    )
}
export default Messagesopill