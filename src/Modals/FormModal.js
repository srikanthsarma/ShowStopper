import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function FormModal({ modal, toggle, show, index, setForm, saveUserDetails }) {

    const [userName, setuserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPhoneNum, setuserPhoneNum] = useState('')
    const [showTime, setshowTime] = useState(0)


    const handleUserData = () => {
        let obj = {}
        obj['index'] = index
        obj['movieName'] = show.name
        obj['userName'] = userName;
        obj['userEmail'] = userEmail;
        obj['userPhoneNum'] = userPhoneNum;
        obj['showTime'] = showTime;

        if (obj.userName && obj.userEmail && obj.showTime) {
            saveUserDetails(obj)
            alert(`Booking Confirmed for ${show.name} at ${showTime}`)
            setForm(false)
            toggle();
        }
        else {
            alert("Enter your NAME, EMAIL and Choose a SHOW_TIME")
        }
    }

    const handleToggle = () => {
        setForm(false)
        toggle();
    }


    return (
        <Modal className='Modal' isOpen={modal} toggle={handleToggle} >
            <ModalHeader className='ModalHeader' toggle={handleToggle}>Booking For {show.name}</ModalHeader>
            <ModalBody className='ModalBody'>
                <form className='BookingForm'>
                    <label>Movie Name: <br />
                        <input
                            value={show.name}
                            readOnly={true}
                        />
                    </label>
                    <label>Name: <br />
                        <input
                            value={userName}
                            type='text'
                            placeholder='Your Name'
                            onChange={e => setuserName(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label>Email: <br />
                        <input
                            value={userEmail}
                            type='email'
                            placeholder='example@gmail.com'
                            onChange={e => setuserEmail(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label>Phone Number: <br />
                        <input
                            value={userPhoneNum}
                            type='phone-number'
                            placeholder='999-9999-999'
                            onChange={e => setuserPhoneNum(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label>Select Show Time: <br />
                        <select onChange={e => setshowTime(e.target.value)} required={true} >
                            <option value=''>Choose Show Time</option>
                            <option value='11:00AM'>11:00AM</option>
                            <option value='01:40PM'>01:40PM</option>
                            <option value='02:30PM'>02:30PM</option>
                            <option value='04:30PM'>04:30PM</option>
                            <option value='11:00PM'>11:00PM</option>
                        </select>
                    </label>
                </form>
            </ModalBody>
            <ModalFooter className='ModalFooter'>
                <Button color="primary" onClick={handleUserData}>
                    Confirm Booking
                </Button>{' '}
                <Button color="secondary" onClick={handleToggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default FormModal