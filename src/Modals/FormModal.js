import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function FormModal({formModal, formToggle, show}) {
    


    return (
        <Modal className='Modal' isOpen={formModal} toggle={formToggle} >
            <ModalHeader className='ModalHeader' toggle={formToggle}>Booking For {show.name}</ModalHeader>
            <ModalBody className='ModalBody'>
                
            </ModalBody>
            <ModalFooter className='ModalFooter'>
                <Button color="primary" onClick={formToggle}>
                    Confirm Booking
                </Button>{' '}
                <Button color="secondary" onClick={formToggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default FormModal