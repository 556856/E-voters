import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import './card.css'
const Scard = () => {
    const [check, setCheck] = useState(true)
    const [show, setShow] = useState(false)
    const checkedHandler = () => {
        setCheck(false)
    }
    return (
        <>
<div style={{display:'flex', gap:'10px'}}>
<div onClick={checkedHandler}  className = {`option_item ${!check ? 'checked' : ''}`}>
      <div className={`option_inner ${!check ? 'checked' : ''}`}>
        <div className={`${!check ? 'tickmark' : ''}`}></div>
        <div className='avatar'><img src="/static/media/avatar-s-11.1d46cc62.jpg" alt="avatarImg" height="100" width="100"></img></div>
        <div>Srikanth Thallapally</div>
      </div>
    </div>
</div>
<Button.Ripple onClick={() => setShow(!show)} color='primary'>
          Basic Modal
        </Button.Ripple>
        <Modal isOpen={show}>
          <ModalHeader toggle={() => setShow(!show)} >Basic Modal</ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
        </Modal>
        </>
    )
}
export default Scard