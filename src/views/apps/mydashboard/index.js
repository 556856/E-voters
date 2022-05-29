import { Fragment, useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import { Row, Col, Card, CardBody, CardText, CardHeader, Input, CardFooter,  FormGroup, Form, CustomInput, Label, modalForm, FormFeedback, Button } from 'reactstrap'
import CompanyTable from './CompanyTable'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import StatsVertical from './StatsVertical'
import ApexLineChart from './ApexLineChart'
import GoalOverview from './GoalOverview'
import TableWithButtons from './TableWithButtons'
import Avatar from '@components/avatar'
import './dashboard.css'
import {
  CheckCircle,
  Slash,
  Trello,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Search,
  Globe,
  Info,
  Check
} from 'react-feather'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import TimerCard from './TimerCard'
import DoughnutChart from './ChartjsDoughnutChart'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { padding } from '@mui/system'
import CopytoClip from './CopytoClip'
const EcommerceDashboard = () => {
  
  const { colors } = useContext(ThemeColors),
    [skin, setSkin] = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#666ee8',
    lineChartDanger = '#ff4961',
    warningColorShade = '#ffe802',
    warningLightColor = '#FDAC34',
    successColorShade = '#28dac6',
    primaryColorShade = '#836AF9',
    infoColorShade = '#299AFF',
    yellowColor = '#ffe800',
    greyColor = '#4F5D70',
    blueColor = '#2c9aff',
    blueLightColor = '#84D0FF',
    greyLightColor = '#EDF1F4',
    trackBgColor = '#e9ecef'


    // ** Hooks
    const [isRtl, setIsRtl] = useRTL()
     // ** To Set Border Radius On Mount
  useEffect(() => {
    /*eslint-disable */
    Chart.elements.Rectangle.prototype.draw = function () {
      let ctx = this._chart.ctx
      let viewVar = this._view
      let left, right, top, bottom, signX, signY, borderSkipped, radius
      let borderWidth = viewVar.borderWidth
      let cornerRadius = 20
      if (!viewVar.horizontal) {
        left = viewVar.x - viewVar.width / 2
        right = viewVar.x + viewVar.width / 2
        top = viewVar.y
        bottom = viewVar.base
        signX = 1
        signY = top > bottom ? 1 : -1
        borderSkipped = viewVar.borderSkipped || 'bottom'
      } else {
        left = viewVar.base
        right = viewVar.x
        top = viewVar.y - viewVar.height / 2
        bottom = viewVar.y + viewVar.height / 2
        signX = right > left ? 1 : -1
        signY = 1
        borderSkipped = viewVar.borderSkipped || 'left'
      }

      if (borderWidth) {
        let barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
        borderWidth = borderWidth > barSize ? barSize : borderWidth
        let halfStroke = borderWidth / 2
        let borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
        let borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
        let borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
        let borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
        if (borderLeft !== borderRight) {
          top = borderTop
          bottom = borderBottom
        }
        if (borderTop !== borderBottom) {
          left = borderLeft
          right = borderRight
        }
      }

      ctx.beginPath()
      ctx.fillStyle = viewVar.backgroundColor
      ctx.strokeStyle = viewVar.borderColor
      ctx.lineWidth = borderWidth
      let corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ]

      let borders = ['bottom', 'left', 'top', 'right']
      let startCorner = borders.indexOf(borderSkipped, 0)
      if (startCorner === -1) {
        startCorner = 0
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4]
      }

      let corner = cornerAt(0)
      ctx.moveTo(corner[0], corner[1])

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i)
        let nextCornerId = i + 1
        if (nextCornerId == 4) {
          nextCornerId = 0
        }

        let nextCorner = cornerAt(nextCornerId)

        let width = corners[2][0] - corners[1][0],
          height = corners[0][1] - corners[1][1],
          x = corners[1][0],
          y = corners[1][1]

        let radius = cornerRadius

        if (radius > height / 2) {
          radius = height / 2
        }
        if (radius > width / 2) {
          radius = width / 2
        }

        if (!viewVar.horizontal) {
          ctx.moveTo(x + radius, y)
          ctx.lineTo(x + width - radius, y)
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
          ctx.lineTo(x + width, y + height - radius)
          ctx.quadraticCurveTo(x + width, y + height, x + width, y + height)
          ctx.lineTo(x + radius, y + height)
          ctx.quadraticCurveTo(x, y + height, x, y + height)
          ctx.lineTo(x, y + radius)
          ctx.quadraticCurveTo(x, y, x + radius, y)
        } else {
          ctx.moveTo(x + radius, y)
          ctx.lineTo(x + width - radius, y)
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
          ctx.lineTo(x + width, y + height - radius)
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
          ctx.lineTo(x + radius, y + height)
          ctx.quadraticCurveTo(x, y + height, x, y + height)
          ctx.lineTo(x, y + radius)
          ctx.quadraticCurveTo(x, y, x, y)
        }
      }

      ctx.fill()
      if (borderWidth) {
        ctx.stroke()
      }
    }
  }, [])

  return (
    <div id='dashboard-ecommerce'>
      <Row>
        <Col xl='3' md='4' sm='6'>
          <Card className='c-card' style={{background: '#e0f9fc'}}>
            <div className='c-body'>
            <div className='avatar p-50 m-0' style={{backgroundColor:'#00cfe8'}}>
          <div className='aavatar me-2 bg-light-primary'><Users size={35} color='#e0f9fc' /></div>
        </div>
        <div className='c-head' >
        <h2 style={{textAlign:'left'}}>50000000</h2>
        <p  style={{textAlign:'left'}} class="card-text">Total Voters</p>
        </div>
            </div>
    </Card>
        </Col>
        <Col xl='3' md='4' sm='6'>
        <Card className='c-card' style={{background:'rgba(59,193,113,.15)'}}>
    
        <div className='c-body'>
        <div className='avatar p-50 m-0' style={{backgroundColor:'#3bc171'}}>
          <div className='aavatar me-2 bg-light-primary'><CheckCircle size={35} color='#90ee90' /></div>
        </div>
        <div className='c-head' >
        <h2 style={{fontWeight:'50px'}}>2000</h2>
        <p class="card-text">Voted</p>
        </div>
        </div>
    </Card>
        </Col>
        <Col xl='3' md='4' sm='6'>
        <Card className='c-card' style={{background:'rgba(255,100,124,.15)'}}>
    <div className='c-body'>
    <div className='avatar p-50 m-0' style={{background:'#ff647c'}}>
          <div className='aavatar me-2 bg-light-primary'><Slash size={35} color='#fff' /></div>
        </div>
        <div className='c-head' >
        <h2 >3000</h2>
        <p class="card-text">Non Voted</p>
        </div>
    </div>
    </Card>
        </Col>
        <Col xl='3' md='4' sm='6'>
        <Card className='c-card' style={{background:'rgba(123,97,255,.15)'}}>
        <div className='c-body'>
        <div className='avatar p-50 m-0' style={{background:'#7b61ff'}}>
          <div className='aavatar me-2 bg-light-primary'><Trello size={35} color='#fff' /></div>
          </div>
          <div className='c-head' >
        <h2>25</h2>
        <p class="card-text">Total Post's</p>
        </div>
</div>
    </Card>
        </Col>
        </Row>
      <Row>
        <Col md='8'>
<CopytoClip/>
        </Col>
        <Col md ='4'>
        <Card className='text-center' style={{background:'#dcf0e4',}}>
      {/* <CardBody style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h6 style={{color:'black'}}>Start Date</h6>
      </CardBody> */}
       <CardHeader style={{display:'flex', justifyContent:'left', gap:'10px'}} >
       <Calendar size={25} style={{color:'black'}}/>
       <h4 style={{color:'black',marginTop:'10px'}}>Start Date</h4>
          </CardHeader>
      <CardFooter style={{borderTop:'1px solid #42b780'}}>
        <div style={{color:'black', display:'flex', justifyContent:'left', alignItems:'center', gap:'10px'}}>
        <h6 style={{color:'black'}}> May 19, 2022, 12:00:00 PM</h6>
         </div>
        </CardFooter>
    </Card>
      
   
        <Card className='text-center' style={{background:'#f9e2e5',}}>
        <CardHeader  style={{display:'flex', justifyContent:'left', gap:'10px'}} >
        <Calendar style={{color:'black'}} size={25}/>
       <h4 style={{color:'black', marginTop:'10px'}}>Start Date</h4>
          </CardHeader>
      <CardFooter style={{borderTop:'1px solid rgb(251 92 117)'}}>
        <div style={{color:'black', display:'flex', justifyContent:'left', alignItems:'center', gap:'10px'}}>
        <h6 style={{marginTop:'10px', color:'black'}}> May 29, 2022, 12:00:00 PM</h6>
         </div>
        </CardFooter>
    </Card>
        </Col>
      </Row>
        <Row>
          <Col md='6'><GoalOverview/></Col>
          <Col md='6'><DoughnutChart
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            warningLightColor={warningLightColor}
            primary={colors.primary.main}
          /></Col>
          <div  style={{display:'flex', gap:'70px'}}>
        
          
          </div>
          
      </Row>
      <Fragment> 
        <Row className='match-height'>
        <Col sm='12'>
          <ApexLineChart direction={isRtl ? 'rtl' : 'ltr'} success ={colors.success.main} />
        </Col>
        </Row>
        </Fragment>
        <Fragment>
      <Row>
        <Col sm='12'>
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
    </div>
  )
}

export default EcommerceDashboard
