import React, { useState } from 'react'
import ShowModal from './ShowModal';


function ShowCard({ show, index }) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    };

    return (
        <div className='showCard' >
            <label onClick={toggle}>
                <h3>{show.name}</h3>
                <h5>{show.language}</h5>
                <h6>Genre: {show.genres.map((genre, index) => <p key={index}>{genre} </p>)}</h6>
                <p>Premiered on {show.premiered}</p>
            </label>
            <img onClick={toggle} src={show.image['original']} alt={show.name}></img>
            <ShowModal modal={modal} toggle={toggle} show={show} index={index} ></ShowModal>
        </div>
    )
}

export default ShowCard