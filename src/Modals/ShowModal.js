import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormModal from './FormModal';



function ShowModal({ modal, toggle, show, index }) {
    const [userDetails, setuserDetails] = useState([])
    const [formModal, setformModal] = useState(false);
    const formToggle = () => setformModal(!formModal);


    const handleBooking =  () => {
        toggle();
        formToggle();
        <FormModal  formModal={formModal} formToggle={formToggle} show={show}></FormModal>
        console.log("Modal: " + modal);
        console.log("formModal : " + formModal);

    }

    const fillForm = (obj) => {
        let tempArr = userDetails
        tempArr.push(obj)
        setuserDetails(tempArr)
    }


    return (
        <Modal className='Modal' isOpen={modal} toggle={toggle} >
            <ModalHeader className='ModalHeader' toggle={toggle}>{show.name}</ModalHeader>
            <ModalBody className='ModalBody'>
                <img src={show.image['medium']} alt={show.name}></img>
                {/* <div className='thumbnailText'>
                    <h6>{show.language}</h6>
                    <p>Genre: {show.genres.map((genre) => < >{genre} </>)}</p>
                    <p>Premiered on {show.premiered}</p>
                </div> */}
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
    );
}

export default ShowModal