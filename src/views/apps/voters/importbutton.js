import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
  import { UploadCloud } from 'react-feather'
import { useState } from 'react'
import BasicTimeline from './BasicTimeline'
const ImportButton = () => {
    const [basicModal, setBasicModal] = useState(false)
    return (
        <>
  <Button.Ripple className='ml-2' outline color='primary'  onClick={() => setBasicModal(!basicModal)}>
        <UploadCloud size={14} />
        <span className='align-middle ml-25'>Import</span>
      </Button.Ripple>
      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
<ModalHeader toggle={() => setBasicModal(!basicModal)}>Import Voters</ModalHeader>
<ModalBody>
<BasicTimeline />
</ModalBody>
<ModalFooter>
  <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
    Submit
  </Button>
</ModalFooter>
</Modal>
        
        </>
       
    )
}
export default ImportButton