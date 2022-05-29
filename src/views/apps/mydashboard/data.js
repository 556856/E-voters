// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}


// // ** Get initial Data
// axios.get('/api/datatables/initial-data').then(response => {
//   data = response.data

// console.log(data);
// })

export const data = [
  {
email: "kocrevy0@thetimes.co.uk",
full_name: "Korrie O'Crevy",
id: 1,
start_date: "09/23/2016",
mobile : "8008338388"},
{
  email: "kocrevy0@thetimes.co.uk",
  full_name: "Korrie O'Crevy",
  id: 2,
  start_date: "09/23/2016",
  mobile : "8008338388"},
  {
    email: "kocrevy0@thetimes.co.uk",
    full_name: "Korrie O'Crevy",
    id: 3,
    start_date: "09/23/2016",
    mobile : "8008338388"},
    {
      email: "kocrevy0@thetimes.co.uk",
      full_name: "Srikanth",
      id: 4,
      start_date: "09/23/2016",
      mobile : "8008338388"}
    ]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Mobile',
    selector: 'mobile',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  } 
]
export default ExpandableTable
