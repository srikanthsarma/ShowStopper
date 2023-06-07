import React, { useState, useEffect } from 'react'
import FormModal from '../Modals/FormModal';
import SummaryModal from '../Modals/SummaryModal';



function ShowModal({ modal, toggle, show, index }) {

    const [form, setForm] = useState(false)
    const [userDetails, setuserDetails] = useState([])

    useEffect(() => {
        let temp = localStorage.getItem(index)
        if (temp) setuserDetails(JSON.parse(temp))
    }, [])

    const saveUserDetails = (obj) => {
        let temp = userDetails
        temp.push(obj)
        setuserDetails(temp)
        localStorage.setItem(index, JSON.stringify(userDetails))
    }

    return (
        (form) ?
            <FormModal
                modal={modal}
                toggle={toggle}
                show={show}
                index={index}
                setForm={setForm}
                saveUserDetails={saveUserDetails}
            ></FormModal> :
            <SummaryModal
                modal={modal}
                toggle={toggle}
                show={show}
                setForm={setForm}
            ></SummaryModal>
    );
}

export default ShowModal