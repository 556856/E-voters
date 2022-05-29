import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap'
import { User, Mail, Users, Lock } from 'react-feather'

const VerticalFormIcons = () => {
  return (
        <Form>
          <Row>
            <Col sm='12'>
              <Label for='nameVerticalIcons'>Full Name</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='First Name' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='EmailVerticalIcons'>Email</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='email' name='Email' id='EmailVerticalIcons' placeholder='Email' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='IconsMobile'>Membership Nio</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Users size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='Membership No' id='IconsMobile' placeholder='Membership No' />
              </InputGroup>
            </Col>
          </Row>
        </Form>
  )
}
export default VerticalFormIcons
