import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Plus } from "react-feather"
import { useState } from "react"
import VerticalFormIcons from "./VerticalFormIcons"
import "@styles/base/pages/dashboard-ecommerce.scss"
import alergif from '@src/assets/images/icons8-box-important.gif' 
import cancelpng from '@src/assets/images/icons8-close-48.png'
import checkgif from '@src/assets/images/icons8-ok.gif'
const Popup = () => {
  const [addElection, setAddElection] = useState(false)
  const [areYouSure, setAreYouSure] = useState(false)
  const [cancelModal, setCancelModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  return (
    <>
      <Button
        className="ml-2"
        color="primary"
        onClick={() => {
          setAreYouSure(!areYouSure)
      }}>
        <span className="align-middle ml-50">Submit</span>
      </Button>
      {/* areyousure */}
      <Modal isOpen={areYouSure} toggle={() => setAreYouSure(!areYouSure)}>
        <ModalHeader toggle={() => setAreYouSure(!areYouSure)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
            setSuccessModal(!successModal)
            setTimeout(() => {
              setAreYouSure(!areYouSure)
            }, 400)
          }}>
            Yes, Change Election settings!
          </Button>
          <Button.Ripple outline color="danger" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setAreYouSure(!areYouSure)
              }, 400)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
       {/* are you sure */}
       {/* Cancelmodal */}
       <Modal isOpen={cancelModal} toggle={() => setCancelModal(!cancelModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={cancelpng}></img>
          <h3>Cancelled</h3>
          <p>UP date your Genral Settings later</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setCancelModal(!cancelModal)
           
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* Cancelmodal */}
        {/* sucessmodal */}
       <Modal isOpen={successModal} toggle={() => setSuccessModal(!successModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={checkgif}></img>
          <h3>Election settings Changed</h3>
          <p>All the flieds you filled are updated</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setSuccessModal(!successModal)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal */}
    </>
  )
}

export default Popup
