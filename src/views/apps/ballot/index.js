import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import TableWithButtons from './TableWithButtons'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  return (
    <div id='dashboard-ecommerce'>
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
