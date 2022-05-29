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
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { User, Mail, Users, Lock, Date, Calendar, Edit2 } from 'react-feather'
import checkImg from '@src/assets/images/icons8-ok.gif'
import cancelImg from '@src/assets/images/icons8-close-64.png'
import { Select } from '@mui/material'
import { useState } from 'react'
const VerticalFormIcons = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false)
  return (
    // <img src={checkImg}></img>
    // <img src={cancelImg}></img>
        <Form>
          <Row>
            <Col sm='12'>
              <Label for='nameVerticalIcons'>Title</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Edit2 size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='Title' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='EmailVerticalIcons'>Start Date</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Calendar size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='date' name='date' id='EmailVerticalIcons' placeholder='date' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='EmailVerticalIcons'>End Date</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Calendar size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='date' name='date' id='EmailVerticalIcons' placeholder='date' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Dropdown isOpen={dropdownOpen}    toggle={() => setDropDownOpen(!dropdownOpen)}>
  <DropdownToggle style={{width:'100%', background:'yellow', color:'red'}} caret>
  Timezone
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem header>INDIA</DropdownItem>
    <DropdownItem>(GMT-09:00) India/Telangana</DropdownItem>
    <DropdownItem>(GMT-09:00) India/Kolkata</DropdownItem>
    <DropdownItem header>USA</DropdownItem>
    <DropdownItem>(GMT-09:00) India/Hawai</DropdownItem>
    <DropdownItem>(GMT-09:00) India/Nyc</DropdownItem>
  </DropdownMenu>
</Dropdown>
            </Col>
          </Row>
        </Form>
  )
}
export default VerticalFormIcons