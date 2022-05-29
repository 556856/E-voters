import { Plus } from "react-feather"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from "react"
import VerticalFormIcons from "./VerticalFormIcons"
const Addvoters = () => {
    const [basicModal, setBasicModal] = useState(false)
    return (
        <> <Button className='ml-2' color='success' onClick = { () => setBasicModal(!basicModal)}>
        <Plus size={15} />
        <span className='align-middle ml-50'>Add Voters</span>
      </Button>
         <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
         <ModalHeader toggle={() => setBasicModal(!basicModal)}>Add Voters</ModalHeader>
         <ModalBody>
<VerticalFormIcons/>
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
export default Addvoters