import { Trash2, AlertCircle } from "react-feather"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from "react"
const Deleteusers = () => {
    const [basicModal, setBasicModal] = useState(false)
    return (
        <> <Button className='ml-2' color='danger' onClick = { () => setBasicModal(!basicModal)}>
  <Trash2 size={15} />
        <span className='align-middle ml-50'>Delete All Users</span>
      </Button>
         <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
         <ModalHeader toggle={() => setBasicModal(!basicModal)}>Delete Voters</ModalHeader>
         <ModalBody>
         <AlertCircle size={85} style={{display:'block', margin:'auto', color:"#d13637"}} />
         <h2 style={{textAlign:'center'}}>Are You Sure?</h2>
         <div style={{textAlign:'center'}}>You won't be able to revert this!</div>
         </ModalBody>
         <ModalFooter style={{disaply:'flex', justifyContent:'space-between', alignItems:"left"}}>
           <Button  color='primary' onClick={() => setBasicModal(!basicModal)}>
             Yes, Delete it!
           </Button>
           <Button.Ripple outline color='danger' type='reset'  onClick={() => setBasicModal(!basicModal)}>
                 Cancel
                </Button.Ripple>
         </ModalFooter>
         </Modal> </>
       
    )
}
export default Deleteusers