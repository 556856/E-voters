// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import { ChevronUp } from 'react-feather'
import { Collapse, Card, CardHeader, CardBody, CardTitle } from 'reactstrap'

const AppCollapse = props => {
  // ** Props
  const { data, type, accordion, active, toggle, titleKey, contentKey, className } = props

  /**
   ** If accordion is true then return only one active index else return an Array
   */
  const defaultActive = () => {
    if (accordion) {
      return active
    } else {
      return [...active]
    }
  }

  // ** State
  const [openCollapse, setOpenCollapse] = useState(defaultActive())

  // ** Function to handle Collapse Toggle
  const handleCollapseToggle = id => {
    if (accordion) {
      if (id === openCollapse) {
        setOpenCollapse(null)
      } else {
        setOpenCollapse(id)
      }
    } else {
      const arr = openCollapse,
        index = arr.indexOf(id)
      if (arr.includes(id)) {
        arr.splice(index, 1)
        setOpenCollapse([...arr])
      } else {
        arr.push(id)
        setOpenCollapse([...arr])
      }
    }
  }

  // ** Function to render collapse
  const renderData = () => {
    return data.map((item, index) => {
      const title = titleKey ? item[titleKey] : item.title,
        content = contentKey ? item[contentKey] : item.content

      return (
        <Card>
          <h1>hello world</h1>
        </Card>
      )
    })
  }

  return (
    <div
      className={classnames('collapse-icon', {
        [className]: className,
        'collapse-default': !type,
        'collapse-shadow': type === 'shadow',
        'collapse-border': type === 'border',
        'collapse-margin': type === 'margin'
      })}
    >
      {renderData()}
    </div>
  )
}

export default AppCollapse

// ** PropTypes
AppCollapse.propTypes = {
  data: Proptypes.array.isRequired,
  accordion: Proptypes.bool,
  type: Proptypes.oneOf(['shadow', 'border', 'margin']),
  active: Proptypes.oneOfType([Proptypes.array, Proptypes.number]),
  titleKey: Proptypes.string,
  contentKey: Proptypes.string,
  className: Proptypes.string
}

// ** Default Props
AppCollapse.defaultProps = {
  active: [],
  toggle: 'click'
}
