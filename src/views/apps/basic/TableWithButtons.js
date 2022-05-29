// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

// ** Table Data & Columns
import { data, columns } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown,  X } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  Form,
  FormGroup 
} from 'reactstrap'
import OTPInput, { ResendOTP } from "otp-input-react"
import {Button, Modal } from 'react-bootstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  // ** States
  // const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // // ** Function to handle Modal toggle
  // const handleModal = () => setModal(!modal)
  const [showfirst, setShoww] = useState(false)
  const [showsecound, setShowsecound] = useState(false) 
  const handleClose = () => setShoww(false)
  const handleShoww = () => setShoww(true)
  const handleShowtow = () => {
    setShowsecound(true)
    setShoww(false)
  }   
  const handleCloset = () => setShowsecound(false)
  const [OTP, setOTP] = useState("")
  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)
    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>DataTable with Buttons</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>

          <Button variant="primary" onClick={handleShoww}>
        Add Voters
      </Button>
      <Modal show={showfirst}>
        <Modal.Header>
          <Modal.Title>Add Voter</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <FormGroup row>
            <Label sm='3' for='Election'>
            Full Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='Full Name' id='Full Name' placeholder='Full Name' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='name'>
            Email
            </Label>
            <Col sm='9'>
              <Input type='mail' name='Email' id='Email' placeholder='Email' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm='3' for='Email'>
            Membership No
            </Label>
            <Col sm='9'>
              <Input type='text' name='Membership No' id='Membership No' placeholder='Membership No' />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm='12'>
            <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Note/Comment' />
            </Col>
          </FormGroup>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleShowtow}>
        Submit with OTP
      </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showsecound}>
        <Modal.Header >
          <Modal.Title>OTP Verification</Modal.Title>
          <X style={{cursor: 'pointer'}}  onClick={handleCloset}/>
        </Modal.Header>
        <Modal.Body>
          <Row>
           
            <Col md='12' style={{display:'flex', flexDirection:'column',   gap: '5px', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <p>Enter the code we just send on your mobile phone ********833</p>
              <OTPInput inputStyles={{}} value='kkkk' onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure/>
              <div style={{justifyContent: 'space-between'}}> <p>Don't receive the code?</p>
      <ResendOTP  style={{color:'blue'}} onResendClick={() => console.log("Resend clicked")} /></div>
           </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary"  onClick={handleCloset}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
    </Fragment>
  )
}

export default DataTableWithButtons
