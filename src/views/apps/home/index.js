
import {
     CardText, Badge, CardTitle, Input, Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap'
import {
    Calendar,
  Plus,
  Search,
  Users
} from 'react-feather'
import { useState } from 'react'
import Popup from './Popup'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom"
const Home = () => {
    const [basicModal, setBasicModal] = useState(false)
    const avatarArr = [
        {
          img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          content: 'PI',
          color: 'light-danger'
        },
        {
          img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          content: 'AL',
          color: 'light-secondary'
        }
      ]
    
      const designPlanningArr = [
        {
          title: 'Start Date',
          subtitle: '12 June, 21',
          time: '8:00 AM'
        },
        {
            title: 'End Date',
            subtitle: '22 June, 21',
            time: '4:00 PM'
          }
      ]
    return (
        <div id='dashboard-ecommerce'>
            <Row style={{margin:' 0px 20px'}}>
                <Col md='6'>
                <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
             <Search size={30}/>
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
               placeholder='Search Elections'
            />
          </Col>
                </Col>
                <Col md='6' style={{justifyContent:"right", width:'100%', display:'flex'}}><Popup/></Col>
            </Row>
            <Row style={{margin:'20px 20px'}}>
          <Col md='4'>
          <Card className='card-app-design'>
      <CardBody>
        {/* <Badge color='light-primary'>03 Sep, 20</Badge> */}
        <CardTitle className='mt-1 mb-75'>Endocrine Society Of India 2020 (Elections)</CardTitle>
        <CardText className='font-small-2 mb-2'>
        Endocrine Society Of India Conducting elections for president , vice, and others in 2022...
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Election Status</h6>
          <Badge className='mr-1' color='light-warning'>
            Bulding 
          </Badge>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
               <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge>
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
<Button.Ripple color='primary' block>
  View Election
</Button.Ripple>
</Link>
        
      </CardBody>
    </Card>
          </Col>
          <Col md='4'>
          <Card className='card-app-design'>
      <CardBody>
        {/* <Badge color='light-primary'>03 Sep, 20</Badge> */}
        <CardTitle className='mt-1 mb-75'>Scar 2022 Elections</CardTitle>
        <CardText className='font-small-2 mb-2'>
        Scar 2022 Elections India Conducting elections for president , vice, and others in 2022...
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Election Status</h6>
          <Badge className='mr-1' color='danger'>
            Ended 
          </Badge>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
          <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge>
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
<Button.Ripple color='primary' block>
  View Election
</Button.Ripple>
</Link>
      </CardBody>
    </Card>
          </Col>
          <Col md='4'>
          <Card className='card-app-design'>
      <CardBody>
        <CardTitle className='mt-1 mb-75'>HearandCardiovasular election 20202</CardTitle>
        <CardText className='font-small-2 mb-2'>
        HearandCardiovasular election 20202 India Conducting, vice, and others in 2022...
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Election Status</h6>
          <Badge className='mr-1' color='success'>
            Running 
          </Badge>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
              <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge>
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
<Button.Ripple color='primary' block>
  View Election
</Button.Ripple>
</Link>
      </CardBody>
    </Card>
          </Col>
          </Row>
      </div>
    )
}
export default Home


//////////////
