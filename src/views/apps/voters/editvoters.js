import { Edit, Plus } from "react-feather"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from "react"
import EditFormIcons from './EditFormIcons'
const Editvoters = () => {
    const [basicModal, setBasicModal] = useState(false)
    return (
        <>
        <Edit style={{color:'grey', cursor:'pointer'}} onClick = { () => setBasicModal(!basicModal)} size={20}/>
    
         <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
         <ModalHeader toggle={() => setBasicModal(!basicModal)}>Edit Voters</ModalHeader>
         <ModalBody>
<EditFormIcons/>
         </ModalBody>
         <ModalFooter>
           <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
             Submit
           </Button>
           <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
         </ModalFooter>
         </Modal> </>
       
    )
}
export default Editvoters