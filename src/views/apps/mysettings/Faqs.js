import { useState } from 'react'
import {
  Settings,
  MessageSquare,
  Mail
} from 'react-feather'
import MultipleColumnForm from './MultipleColumnForm'
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'
import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, Card } from 'reactstrap'
import Messagesopill from './Messagesopill'
import MessagePopup from './MessagePopup'
import VotingTemplateForm from './VotingTemplateForm.js'
const Faqs = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
            <NavItem tag='li'>
            
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
             <Settings size={15} /> Genral Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              <MessageSquare size={15}/>Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
             <Mail size={15}/> Email
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
              active={active === '4'}
              onClick={() => {
                toggle('3')
              }}
            >
             Election Officer
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
              active={active === '5'}
              onClick={() => {
                toggle('3')
              }}
            >
              Delete
            </NavLink>
        </NavItem>
            </Nav>
            <img
              className='img-fluid d-none d-md-block'
              src={illustration}
              alt='illustration'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
        <Col lg='9' md='8' sm='12'>
        <TabContent activeTab={active}>
          <TabPane tabId='1'>
          <div className='d-flex align-items-center' style={{marginBottom:'20px'}}>
            <div className='avatar avatar-tag bg-light-primary mr-1'>
            <Settings/>
            </div>
            <div>
              <h4 className='mb-0'>Genral Settings</h4>
              <span>You can change your Election settings here</span>
            </div>
          </div>
          <MultipleColumnForm/>
          </TabPane>
          <TabPane tabId='2'>
          <div className='d-flex align-items-center' style={{marginBottom:'20px'}}>
            <div className='avatar avatar-tag bg-light-primary mr-1'>
            <MessageSquare />
            </div>
            <div>
              <h4 className='mb-0'>Messages</h4>
              <span>You can change all messages and textual changes here</span>
            </div>
          </div>
          <Messagesopill/>
          </TabPane>
          <TabPane tabId='3'>
          <div className='d-flex align-items-center' style={{marginBottom:'20px'}}>
            <div className='avatar avatar-tag bg-light-primary mr-1'>
            <Mail />
            </div>
            <div>
              <h4 className='mb-0'>Email</h4>
              <span>You can change Email and mobile otp template text here</span>
            </div>
          </div>
        <VotingTemplateForm/>
          </TabPane>
          <TabPane tabId='4'>
            <p>
              Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice
              cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder
              tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish
              fruitcake bonbon bear claw gummi bears apple pie.
            </p>
          </TabPane>
          <TabPane tabId='5'>
            <p>
              Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice
              cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder
              tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish
              fruitcake bonbon bear claw gummi bears apple pie.
            </p>
          </TabPane>
        </TabContent>
        </Col>
      </Row>
    </div>
  )
}

export default Faqs
