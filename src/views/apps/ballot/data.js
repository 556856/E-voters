
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import ModalFormAndScroll from './edituserOTP/ModalFormAndScroll'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: {  title: 'Voted', color: 'light-success' },
  2: { title: 'Not Voted', color: 'light-danger' }
}
// export let data

// // ** Get initial Data
// axios.get('/api/datatables/initial-data').then(response => {
//   data = response.data
//   console.log(data)
// })


export const  data = [
  {
email: "Srikanth@gmail.com",
full_name: "Srikanth thallapally",
id: 1,
responsive_id: "",
mobile : '80083338388',
 catogery : 'SMP-7429',
voted_on: "09/23/2016",
status: 1},
{
  email: "Srikanth@gmail.com",
  full_name: "venu thallapally",
  id: 2,
  responsive_id: "",
  mobile : '80083338388',
   catogery : 'SMP-7429',
  voted_on: "09/23/2016",
  status: 2},
  {
    email: "Srikanth@gmail.com",
    full_name: "shiva",
    id: 3,
    responsive_id: "",
    mobile : '80083338388',
     catogery : 'SMP-7429',
    voted_on: "09/23/2016",
    status: 2},
    {
      email: "Srikanth@gmail.com",
      full_name: "pavan",
      id: 4,
      responsive_id: "",
      mobile : '80083338388',
       catogery : 'SMP-7429',
      voted_on: "09/23/2016",
      status: 2},
      {
        email: "Srikanth@gmail.com",
        full_name: "mintu",
        id: 5,
        responsive_id: "",
        mobile : '80083338388',
         catogery : 'SMP-7429',
        voted_on: "09/23/2016",
        status: 2},
        {
          email: "Srikanth@gmail.com",
          full_name: "swamy",
          id: 6,
          responsive_id: "",
          mobile : '80083338388',
           catogery : 'SMP-7429',
          voted_on: "09/23/2016",
          status: 2},
          {
            email: "Srikanth@gmail.com",
            full_name: "raju",
            id: 7,
            responsive_id: "",
            mobile : '80083338388',
             catogery : 'SMP-7429',
            voted_on: "09/23/2016",
            status: 1},
            {
              email: "Srikanth@gmail.com",
              full_name: "mintu",
              id: 8,
              responsive_id: "",
              mobile : '80083338388',
               catogery : 'SMP-7429',
              voted_on: "09/23/2016",
              status: 1},
              {
                email: "Srikanth@gmail.com",
                full_name: "sohitha",
                id: 9,
                responsive_id: "",
                mobile : '80083338388',
                 catogery : 'SMP-7429',
                voted_on: "09/23/2016",
                status: 2}
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
    name: 'catogery',
    selector: 'catogery',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Voted on',
    selector: 'voted_on',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
       <ModalFormAndScroll/>
        </div>
      )
    }
  }
]
export default ExpandableTable
