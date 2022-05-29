import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Plus } from "react-feather"
import { useState } from "react"
import VerticalFormIcons from "./VerticalFormIcons"
import "@styles/base/pages/dashboard-ecommerce.scss"
import alergif from '@src/assets/images/icons8-box-important.gif' 
import cancelpng from '@src/assets/images/icons8-close-48.png'
import checkgif from '@src/assets/images/icons8-ok.gif'
const MessagePopup = () => {
  const [addElection, setAddElection] = useState(false)
  const [areYouSure, setAreYouSure] = useState(false)
  const [previewMail, setPerviewMail] = useState(false)
  const [cancelModal, setCancelModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  return (
    <>
      <Button
    outline 
        className="ml-2"
        color="primary"
        onClick={() => {
          setPerviewMail(!areYouSure)
      }}>
        <span className="align-middle ml-50">Preview Email</span>
      </Button>
      {/* previewMail */}
      <Modal isOpen={previewMail} toggle={() => setPerviewMail(!previewMail)}>
        <ModalHeader toggle={() => setPerviewMail(!previewMail)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <h2>Send Preview Email</h2>
          <h5>Press "Send Email" to send a preview of the voting invite email to your account email address: srikanththallapally619@gmail.com.</h5>
        <h5>Please note the following:</h5>
        <h5>1) Voter information will be randomized.<br></br>
2) The Voter ID and Voter Key will not work.<br></br>
3) The link to the election will not work if the election is in the "Building" state.</h5>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
            setAreYouSure(!successModal)
            setTimeout(() => {
              setPerviewMail(!previewMail)
            }, 400)
          }}>
           Submit Email
          </Button>
          <Button color="danger" onClick={() => {
            setPerviewMail(!previewMail)
          }}>
           Cancel
          </Button>
        </ModalFooter>
      </Modal>
       {/* previewMail */}
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
            Yes, Send preview Mail!
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
          <p>Send Preview Mail Later!</p>
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
          <h3>Preview Mail Send</h3>
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

export default MessagePopup
