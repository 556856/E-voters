// ** React Imports
import { Fragment } from 'react'

// ** Dropdowns Imports

import UserDropdown from './UserDropdown'
// ** Custom Components
import NavbarBookmarks from './NavbarBookmarks'

// ** Third Party Components
import { Sun, Moon, Calendar, BookOpen } from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center' style={{width : '45%', justifyContent:'space-between'}}>
      <span style={{fontWeight:'bold'}}>Endocrine Socity Of India 2022</span>
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        {/* <IntlDropdown /> */}
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
        {/* <NavbarSearch />
        <CartDropdown />
        <NotificationDropdown /> */}
        <UserDropdown />
      </ul>
    </Fragment>
  )
}

export default ThemeNavbar
