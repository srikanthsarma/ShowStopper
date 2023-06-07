import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SummaryModal({ modal, toggle, show, setForm }) {

    const handleBooking = () => {
        setForm(true)
    }

    return (
        <Modal className='Modal' isOpen={modal} toggle={toggle} >
            <ModalHeader className='ModalHeader' toggle={toggle}>{show.name}</ModalHeader>
            <ModalBody className='ModalBody'>
                <img src={show.image['medium']} alt={show.name}></img>
                <div className='summary'>
                    <h3>Summary:</h3>
                    {show.summary}
                </div>
            </ModalBody>
            <ModalFooter className='ModalFooter'>
                <Button color="primary" onClick={handleBooking}>
                    Book Now
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default SummaryModal